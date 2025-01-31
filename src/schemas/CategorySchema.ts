const CategorySchema = {
  name: "Category",
  primaryKey: "id",
  properties: {
    id: "string",
    name: "string",
    color: { type: "string", default: "#FFFFFF" },
    isDefault: { type: "boolean", default: false },
    isCredit: { type: "boolean", default: false },
    isDebit: { type: "boolean", default: false },
    order: { type: "int", default: 0 },
    entries: "Entry[]",
  },
};

export default CategorySchema;
