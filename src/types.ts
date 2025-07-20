export type FieldType =
  | "string"
  | "number"
  | "boolean"
  | "float"
  | "objectId"
  | "nested";

export interface Field {
  id: string;
  key: string;
  label?: string;
  type: FieldType;
  children?: Field[];
}
