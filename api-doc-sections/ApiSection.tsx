"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type ApiSectionProps = {
  title: string;
  description?: string;
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  defaultBody?: string;
  token?: string; // optional token prop
};

const methodColors: Record<string, string> = {
  GET: "#28a745",
  POST: "#0070f3",
  PUT: "#ffc107",
  DELETE: "#dc3545",
};

export default function ApiSection({
  title,
  description,
  endpoint,
  method,
  defaultBody = "{}",
  token: initialToken = "", // use the prop to prefill
}: ApiSectionProps) {
  const [token, setToken] = useState(initialToken);
  const [body, setBody] = useState(defaultBody);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setBody(defaultBody);
  }, [defaultBody]);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios({
        url: endpoint,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: body ? JSON.parse(body) : {},
      });
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data || err.message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>{title}</h2>
          {description && <p style={{ margin: "4px 0", color: "#555" }}>{description}</p>}
          <a
            href={endpoint}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0070f3", textDecoration: "underline" }}
          >
            {endpoint}
          </a>
        </div>
        <span
          style={{
            backgroundColor: methodColors[method],
            color: "#fff",
            padding: "0.3rem 0.8rem",
            borderRadius: "4px",
            marginTop: "0.5rem",
          }}
        >
          {method}
        </span>
      </div>

      {/* Request + Response */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Request */}
        <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label style={{ fontWeight: 500 }}>Authorization Token</label>
          <input
            type="text"
            placeholder="Bearer token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          {method !== "GET" && (
            <>
              <label style={{ fontWeight: 500 }}>JSON Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontFamily: "monospace",
                  resize: "vertical",
                }}
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>

        {/* Right: Response */}
        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "#f4f4f4",
            borderRadius: "4px",
            padding: "1rem",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            overflowY: "auto",
            maxHeight: "500px",
            minHeight: "150px",
          }}
        >
          {error ? JSON.stringify(error, null, 2) : JSON.stringify(response, null, 2)}
        </div>
      </div>
    </div>
  );
}