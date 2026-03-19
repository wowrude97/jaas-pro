export default function Home() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#020617",
      color: "#fff",
      fontFamily: "sans-serif"
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: 80,
        background: "#020617",
        borderRight: "1px solid #1e293b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20
      }}>
        <div style={icon}>🏠</div>
        <a href="/clientes" style={icon}>👥</a>
        <div style={icon}>💰</div>
        <div style={icon}>📊</div>
        <div style={icon}>📅</div>
      </div>

      {/* CONTEÚDO */}
      <div style={{ flex: 1, padding: 20 }}>

        {/* HEADER */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20
        }}>
          <h2>Dashboard</h2>

          <div>
            <button style={filterBtn}>Diário</button>
            <button style={filterBtn}>Mensal</button>
          </div>
        </div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20
        }}>

          <div style={card}>
            <h3>Tempo Médio</h3>
            <h1 style={bigNumber}>2h 32m</h1>
            <p style={{ color: "#22c55e" }}>↓ Melhorou hoje</p>
          </div>

          <div style={card}>
            <h3>Atendimentos</h3>
            <h1 style={bigNumber}>48</h1>
            <p style={{ color: "#3b82f6" }}>Hoje</p>
          </div>

          <div style={card}>
            <h3>Negativações</h3>
            <h1 style={bigNumber}>12</h1>
            <p style={{ color: "#f59e0b" }}>Atenção</p>
          </div>

          <div style={card}>
            <h3>Cancelamentos</h3>
            <h1 style={bigNumber}>5</h1>
            <p style={{ color: "#ef4444" }}>↑ Ontem</p>
          </div>

        </div>

      </div>
    </div>
  );
}

const icon = {
  marginBottom: 20,
  fontSize: 20,
  cursor: "pointer"
};

const card = {
  background: "#0f172a",
  padding: 20,
  borderRadius: 12,
  border: "1px solid #1e293b"
};

const bigNumber = {
  fontSize: 32,
  fontWeight: "bold",
  marginTop: 10
};

const filterBtn = {
  marginLeft: 10,
  padding: "5px 10px",
  background: "#0f172a",
  border: "1px solid #1e293b",
  color: "#fff",
  borderRadius: 5,
  cursor: "pointer"
};
