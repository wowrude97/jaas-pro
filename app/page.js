export default function Home() {
  return (
    <main style={{
      display: "flex",
      minHeight: "100vh",
      background: "#0f172a",
      color: "#fff",
      fontFamily: "Arial"
    }}>
      
      {/* MENU */}
      <aside style={{
        width: "250px",
        background: "#020617",
        padding: "20px",
        borderRight: "1px solid #1e293b"
      }}>
        <h2>JAAS Pro 🚀</h2>

        <nav style={{ marginTop: "30px" }}>
          <p>📊 Dashboard</p>
          <p>👥 Clientes</p>
          <p>💰 Negativação</p>
          <p>🤝 Negociação</p>
          <p>🗓️ Agenda</p>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <section style={{ padding: "30px", flex: 1 }}>
        <h1>Dashboard</h1>
        <p>Sistema iniciando...</p>
      </section>

    </main>
  );
}
