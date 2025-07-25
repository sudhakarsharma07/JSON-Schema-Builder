# 🧩 JSON Schema Builder — HROne Frontend Intern Task
---

## 📌 Overview
A frontend tool built with **ReactJS** + **Ant Design**, that allows users to dynamically build JSON schemas.  
Users can add/edit/delete fields, and create nested structures with real-time JSON preview.

This project is built as part of the **HROne Frontend Intern Hiring Task**.

---

## ✨ Features
✅ Add new fields dynamically  
✅ Edit field names/keys  
✅ Delete fields  
✅ Add nested fields (recursive, for `"Nested"` type)  
✅ Real-time JSON preview panel  
✅ Clean, responsive UI styled with **Ant Design**

---

## 🧩 Supported Field Types
- `String`
- `Number`
- `Boolean`
- `Float`
- `ObjectId`
- `Nested`

Allows users to design deeply nested, structured JSON.

---

## 🛠 Tech Stack
- ReactJS
- Ant Design (AntD)
- React Hooks (`useState`, `useEffect`)
- TypeScript (optional)

---

## 📁 Folder Structure

```plaintext
json-schema-builder/
├── src/
│   ├── components/
│   │   └── FieldBuilder.tsx      # Dynamic field builder component
│   ├── utils/
│   │   └── jsonBuilder.ts        # Builds JSON object from fields array
│   ├── types.ts                  # Type definitions for fields
│   ├── App.tsx                   # Main app layout and logic
│   ├── App.css                   # Custom styles
│   └── main.tsx                  # App entry point
├── public/
├── package.json
├── README.md
└── tsconfig.json 
```

---

## 📄 Key Files Used

| File | Purpose |
|-----|---------|
| `src/components/FieldBuilder.tsx` | Renders dynamic fields, handles add/edit/delete |
| `src/utils/jsonBuilder.ts` | Converts field data into JSON |
| `src/types.ts` | Field & type definitions |
| `src/App.tsx` | Main layout, header/footer, and JSON preview |
| `src/App.css` | Styling overrides |

---

## 🏃‍♂️ How to Run Locally

```bash
git clone https://github.com/your-username/json-schema-builder.git
cd json-schema-builder
npm install
npm run dev
```

Then open 👉 **http://localhost:5173/**
---

## 🧑‍💻 Author
**Sudhakar Sharma**  
> © 2025 JSON Schema Builder — Built with ❤️ by Sudhakar Sharma

---

## 📌 Note
- UI is styled with **AntD** / **ShadCN**; design customization is optional.
- Focus first on core functionality.
- Avoid AI-generated code.

---

⭐ **Good luck!**  
Let's build something great! 🚀
