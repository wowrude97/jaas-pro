"use client";
import { useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [obs, setObs] = useState("");

  function adicionarCliente() {
    if (!nome) return;

    setClientes([...clientes, { nome, status, obs }]);

    setNome("");
    setStatus("");
    setObs("");
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#0f172a",
      color: "#fff"
    }}>

      {/* MENU */}
      <div style={{
        width: 220,
        background: "#020617",
        padding: 20,
        borderRight: "1px solid #1e293b"
      }}>
        <h2>JAAS Pro 🚀</h2>
        <a href="/" style={menuItem}>🏠 Dashboard</a>
        <a href="/clientes" style={menuItem}>👥 Clientes</a>
      </div>

      {/* CONTEÚDO */}
      <div style={{ flex: 1, padding: 30 }}>
        <h1>Clientes</h1>

        {/* FORM */}
        <div style={{
          background: "#020617",
          padding: 20,
          borderRadius: 10,
          border: "1px solid #1e293b",
          marginTop: 20
        }}>
          <input
            placeholder="Nome do cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={input}
          />

          <input
            placeholder="Status (ex: Negativado)"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={input}
          />

          <input
            placeholder="Observação"
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            style={input}
          />

          <button onClick={adicionarCliente} style={button}>
            + Adicionar Cliente
          </button>
        </div>

        {/* LISTA */}
        <div style={{ marginTop: 30 }}>
          {clientes.map((c, i) => (
            <div key={i} style={card}>
              <h3>{c.nome}</h3>
              <p>Status: {c.status}</p>
              <small>{c.obs}</small>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const input = {
  display: "block",
  marginBottom: 10,
  padding: 10,
  width: "100%",
  background: "#020617",
  border: "1px solid #1e293b",
  color: "#fff",
  borderRadius: 5
};

const button = {
  padding: 10,
  background: "#2563eb",
  border: "none",
  color: "#fff",
  borderRadius: 5,
  cursor: "pointer"
};

const card = {
  background: "#020617",
  padding: 15,
  borderRadius: 10,
  border: "1px solid #1e293b",
  marginBottom: 10
};

const menuItem = {
  display: "block",
  marginTop: 10,
  color: "#cbd5f5",
  textDecoration: "none"
};
      </ul>
    </div>
  );
}
