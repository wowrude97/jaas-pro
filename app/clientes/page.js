"use client";
import { useState } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [obs, setObs] = useState("");

  function adicionarCliente() {
    if (!nome) return;

    setClientes([
      ...clientes,
      { nome, status, obs }
    ]);

    setNome("");
    setStatus("");
    setObs("");
  }

  return (
    <div style={{
      padding: 30,
      background: "#0f172a",
      minHeight: "100vh",
      color: "#fff"
    }}>
      <h1>Clientes</h1>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: 10, marginRight: 10 }}
        />

        <input
          placeholder="Status (ex: Negativado)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: 10, marginRight: 10 }}
        />

        <input
          placeholder="Observação"
          value={obs}
          onChange={(e) => setObs(e.target.value)}
          style={{ padding: 10, marginRight: 10 }}
        />

        <button onClick={adicionarCliente}>
          Adicionar
        </button>
      </div>

      <ul style={{ marginTop: 30 }}>
        {clientes.map((c, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <strong>{c.nome}</strong> - {c.status} <br />
            <small>{c.obs}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
