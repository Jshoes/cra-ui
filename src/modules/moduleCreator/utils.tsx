import React from "react";
import { Select } from "antd";

export type option = {
  label: string;
  value: string;
};

export const dicts = (options: option[], key: string) => {
  return options
    .filter((it: option) => {
      return it.value === key;
    })
    .pop()?.label;
};

export const renderSelectOption = (options: option[]) => {
  return options.map((it: option) => (
    <Select.Option value={it.value}>{it.label}</Select.Option>
  ));
};
