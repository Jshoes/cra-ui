export const selectType = [
  {
    label: "输入框",
    value: "input",
  },
  {
    label: "下拉框",
    value: "select",
  },
  {
    label: "日期选择",
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
    label: "text",
    value: "text",
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
