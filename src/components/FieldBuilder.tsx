import React from "react";
import { Field, FieldType } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Input, Select, Button, Space, Card } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

interface Props {
  fields: Field[];
  onChange: (updatedFields: Field[]) => void;
}

const FIELD_TYPES: FieldType[] = [
  "string",
  "number",
  "boolean",
  "float",
  "objectId",
  "nested"
];

const FieldBuilder: React.FC<Props> = ({ fields, onChange }) => {
  const updateField = (id: string, updated: Partial<Field>) => {
    const updatedFields = fields.map((f) =>
      f.id === id ? { ...f, ...updated } : f
    );
    onChange(updatedFields);
  };

  const removeField = (id: string) => {
    const updated = fields.filter((f) => f.id !== id);
    onChange(updated);
  };

  const addField = () => {
    const newField: Field = {
      id: uuidv4(),
      key: "",
      label: "",
      type: "" as FieldType  
    };
    onChange([...fields, newField]);
  };

  return (
    <>
      {fields.map((field) => (
        <Card
          key={field.id}
          size="small"
          style={{ marginBottom: 8, marginLeft: 16 }}
          bodyStyle={{ padding: 12 }}
        >
          <Space align="start" wrap>
            <Input
              placeholder="Field key"
              value={field.key}
              onChange={(e) =>
                updateField(field.id, { key: e.target.value, label: e.target.value })
              }
              style={{ width: 180 }}
            />

            <Select
              value={field.type || undefined}
              onChange={(type: FieldType) => {
                updateField(field.id, {
                  type,
                  children: type === "nested"
                    ? [{
                        id: uuidv4(),
                        key: "",
                        label: "",
                        type: "" as FieldType   
                      }]
                    : undefined
                });
              }}
              style={{ width: 140 }}
              placeholder="Field Type"
            >
              <Select.Option value="" disabled>
                Field Type
              </Select.Option>
              {FIELD_TYPES.map((t) => (
                <Select.Option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </Select.Option>
              ))}
            </Select>

            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => removeField(field.id)}
            />
          </Space>

          {field.children && (
            <div style={{ marginLeft: 24, marginTop: 8 }}>
              <FieldBuilder
                fields={field.children}
                onChange={(newChildren) =>
                  updateField(field.id, { children: newChildren })
                }
              />
            </div>
          )}
        </Card>
      ))}

      <Button
        type="dashed"
        onClick={addField}
        icon={<PlusOutlined />}
        style={{ marginTop: 10, marginLeft: 16 }}
      >
        Add Field
      </Button>
    </>
  );
};

export default FieldBuilder;
