import { useEffect, useState } from "react";
import {
  Input,
  Button,
  Table,
  Tag,
  Select,
  Badge,
  Card,
  Row,
  Col,
  message,
  Popconfirm,
  Tooltip,
  Modal,
} from "antd";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const AdminDashboard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [rsvps, setRsvps] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRsvp, setSelectedRsvp] = useState(null);

  // FETCH RSVPs
  const fetchRsvps = async () => {
    try {
      const q = query(collection(db, "rsvps"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          guests: Array.isArray(d.guests) ? d.guests : [],
          attending: d.attending || "no",
          meal: d.meal || "-",
          dietary: d.dietary || "-",
          message: d.message || "-",
          createdAt: d.createdAt || null,
        };
      });
      setRsvps(data);
    } catch (error) {
      message.error("Failed to fetch RSVPs");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuth) fetchRsvps();
  }, [isAuth]);

  // LOGIN
  const handleLogin = () => {
    if (password === "jm26") {
      setIsAuth(true);
      message.success("Logged in successfully");
    } else {
      message.error("Incorrect password");
    }
  };

  // DELETE RSVP
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "rsvps", id));
      message.success("RSVP deleted successfully");
      fetchRsvps(); // refresh list
    } catch (error) {
      message.error("Failed to delete RSVP");
      console.error(error);
    }
  };

  // SHOW MODAL
  const handleViewDetails = (rsvp) => {
    setSelectedRsvp(rsvp);
    setModalVisible(true);
  };

  // CLOSE MODAL
  const handleModalClose = () => {
    setSelectedRsvp(null);
    setModalVisible(false);
  };

  // EXCEL EXPORT (FLATTEN GUESTS)
  const exportExcel = () => {
    const wsData = rsvps.map((r) => ({
      Guests:
        r.guests.length > 0
          ? r.guests.map((g) => `${g.firstName} ${g.lastName}`).join(", ")
          : "-",
      GuestCount: r.guests.length,
      Attending: r.attending === "yes" ? "Yes" : "No",
      Meal: r.meal,
      Dietary: r.dietary,
      Message: r.message,
    }));

    const ws = XLSX.utils.json_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RSVPs");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "RSVP_List.xlsx");
  };

  if (!isAuth) {
    return (
      <div style={styles.wrapper}>
        <Card title="Admin Login" style={styles.card}>
          <Input.Password
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            block
            style={{ marginTop: 16 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Card>
      </div>
    );
  }

  // FILTER + SEARCH
  const filteredData = rsvps
    .filter((r) => filter === "all" || r.attending === filter)
    .filter((r) =>
      r.guests
        .map((g) => `${g.firstName} ${g.lastName}`.toLowerCase())
        .join(" ")
        .includes(search.toLowerCase())
    );

  // TABLE COLUMNS
  const columns = [
    {
      title: "Guests",
      dataIndex: "guests",
      render: (guests) => {
        if (!guests.length) return "-";

        // Show only the first guest
        const displayGuests = guests.slice(0, 1).map((g) => (
          <Tag key={g.firstName + g.lastName}>
            {g.firstName} {g.lastName}
          </Tag>
        ));

        const extraCount = guests.length - displayGuests.length;
        return (
          <div>
            {displayGuests}
            {extraCount > 0 && (
              <Tooltip
                title={guests
                  .slice(1)
                  .map((g) => `${g.firstName} ${g.lastName}`)
                  .join(", ")}
              >
                <Tag>+{extraCount} more</Tag>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      title: "Attendance",
      dataIndex: "attending",
      filters: [
        { text: "Attending", value: "yes" },
        { text: "Not Attending", value: "no" },
      ],
      onFilter: (value, record) => record.attending === value,
      render: (value) =>
        value === "yes" ? (
          <Tag color="green">Attending</Tag>
        ) : (
          <Tag color="red">Not Attending</Tag>
        ),
    },
    {
      title: "Guest Count",
      render: (_, record) => record.guests.length,
    },
    { title: "Meal", dataIndex: "meal" },
    { title: "Dietary", dataIndex: "dietary" },
    { title: "Message", dataIndex: "message" },
    {
      title: "Action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="default" onClick={() => handleViewDetails(record)}>
            View Details
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this RSVP?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* STATS */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Badge
              count={rsvps.filter((r) => r.attending === "yes").length}
              style={{ backgroundColor: "#52c41a" }}
            >
              <span>Attending</span>
            </Badge>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Badge
              count={rsvps.filter((r) => r.attending === "no").length}
              style={{ backgroundColor: "#ff4d4f" }}
            >
              <span>Not Attending</span>
            </Badge>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card>
            <Button type="primary" onClick={exportExcel}>
              Export Excel
            </Button>
          </Card>
        </Col>
      </Row>

      {/* FILTERS */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} md={6}>
          <Select value={filter} onChange={setFilter} style={{ width: "100%" }}>
            <Select.Option value="all">All RSVPs</Select.Option>
            <Select.Option value="yes">Attending</Select.Option>
            <Select.Option value="no">Not Attending</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Input
            placeholder="Search by Guest Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      {/* TABLE */}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        scroll={{ x: "max-content" }}
      />

      {/* MODAL FOR FULL DETAILS */}
      <Modal
        open={modalVisible} // <-- fixed here for AntD v5
        title="RSVP Full Details"
        onCancel={handleModalClose}
        footer={[
          <Button key="close" type="primary" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        {selectedRsvp && (
          <div>
            <p>
              <strong>Guests:</strong>{" "}
              {selectedRsvp.guests.length
                ? selectedRsvp.guests
                    .map((g) => `${g.firstName} ${g.lastName}`)
                    .join(", ")
                : "-"}
            </p>
            <p>
              <strong>Guest Count:</strong> {selectedRsvp.guests.length}
            </p>
            <p>
              <strong>Attendance:</strong>{" "}
              {selectedRsvp.attending === "yes" ? "Attending" : "Not Attending"}
            </p>
            <p>
              <strong>Meal:</strong> {selectedRsvp.meal}
            </p>
            <p>
              <strong>Dietary:</strong> {selectedRsvp.dietary}
            </p>
            <p>
              <strong>Message:</strong> {selectedRsvp.message}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },
  card: { width: 360 },
};
