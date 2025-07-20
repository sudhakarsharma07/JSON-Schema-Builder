import { Field } from "../types";

export const buildJson = (fields: Field[]) => {
  const result: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.type === "nested" && field.children) {
      result[field.key] = buildJson(field.children);
    } else {
      result[field.key] = field.type;
    }
  });

  return result;
};
