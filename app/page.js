export default function Home() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#0f172a",
      color: "#fff",
      fontFamily: "Arial"
    }}>

      {/* MENU */}
      <div style={{
        width: 220,
        background: "#020617",
        padding: 20,
        borderRight: "1px solid #1e293b"
      }}>
        <h2 style={{ marginBottom: 30 }}>JAAS Pro 🚀</h2>

        <a href="/clientes" style={menuItem}>👥 Clientes</a>
        <p style={menuItem}>💰 Negativação</p>
        <p style={menuItem}>🔄 Renegociação</p>
        <p style={menuItem}>📊 Dashboard</p>
        <p style={menuItem}>📅 Agenda</p>
      </div>

      {/* CONTEÚDO */}
      <div style={{ flex: 1, padding: 30 }}>
        <h1>Dashboard</h1>

        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <div style={card}>📈 Contratações: 0</div>
          <div style={card}>📉 Cancelamentos: 0</div>
          <div style={card}>⚠️ Negativações: 0</div>
        </div>
      </div>
    </div>
  );
}

const menuItem = {
  display: "block",
  marginBottom: 15,
  cursor: "pointer",
  color: "#cbd5f5",
  textDecoration: "none"
};

const card = {
  background: "#020617",
  padding: 20,
  borderRadius: 10,
  minWidth: 200,
  border: "1px solid #1e293b"
};
