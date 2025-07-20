import React, { useState, useEffect } from "react";
import FieldBuilder from "./components/FieldBuilder";
import { Field } from "./types";
import { buildJson } from "./utils/jsonBuilder";
import { Layout, Card, Typography } from "antd";
import "./App.css";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  const [fields, setFields] = useState<Field[]>([]);
  const [jsonOutput, setJsonOutput] = useState<object>({});

  useEffect(() => {
    const json = buildJson(fields);
    setJsonOutput(json);
  }, [fields]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          background: "#6366f1",
          textAlign: "center",
          padding: "12px 0"
        }}
      >
        <Title level={3} style={{ color: "#fff", margin: 0 }}>
          👋 Welcome to JSON Schema Builder
        </Title>
      </Header>

      {/* Content */}
      <Content
        style={{
          display: "flex",
          padding: 24,
          gap: 24,
          alignItems: "flex-start",
          background: "#f9fafb"
        }}
      >
        <div style={{ flex: 1 }}>
          <Title level={4}>🧩 JSON Schema Builder</Title>
          <Card size="small">
            <FieldBuilder fields={fields} onChange={setFields} />
          </Card>
        </div>

        <div style={{ flex: 1 }}>
          <Title level={4}>📄 JSON Output</Title>
          <Card size="small">
            <pre
              style={{
                margin: 0,
                padding: 12,
                backgroundColor: "#2a2a2a", // dark shade background
                color: "#e0e0e0",           // light gray text
                borderRadius: 4,
                fontSize: 13,
                overflowX: "auto"
              }}
            >
              {JSON.stringify(jsonOutput, null, 2)}
            </pre>
          </Card>
        </div>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          color: "#888",
          background: "#fff",
          fontSize: 13
        }}
      >
        © 2025 <strong>JSON Schema Builder</strong> — Built with{" "}
        <span style={{ color: "#e25555" }}>❤️</span> by{" "}
        <strong>Sudhakar Sharma</strong>
      </Footer>
    </Layout>
  );
}

export default App;
