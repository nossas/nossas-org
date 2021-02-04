// import React, { Component } from 'react';
import { withTheme } from "@rjsf/core";
import TitleField from "./TitleField";
import Widgets from "./Widgets";
import FieldTemplate from "./FieldTemplate";

const theme: any = {
  children: "div",
  FieldTemplate,
  fields: {
    TitleField,
  },
  widgets: Widgets,
};

export default withTheme(theme);
