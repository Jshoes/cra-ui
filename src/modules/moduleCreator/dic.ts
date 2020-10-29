export const dataType = [
  {
    label: "string",
    value: "string",
  },
  {
    label: "number",
    value: "number",
  },
  {
    label: "boolean",
    value: "boolean",
  },
];
export const selectType = [
  {
    label: "Input",
    value: "input",
  },
  {
    label: "Select",
    value: "select",
  },
  {
    label: "Datepicker",
    value: "datepicker",
  },
];

export const buttonType = [
  {
    label: "default",
    value: "default",
  },
  {
    label: "primary",
    value: "primary",
  },
  {
    label: "dashed",
    value: "dashed",
  },
  {
    label: "link",
    value: "link",
  },
];

export const placeholder = (type: "select" | "input") => {
  return {
    placeholder: type === "select" ? "请选择" : "请输入",
  };
};
