import React from "react";
import { WidgetProps } from "@rjsf/core";
import TextWidget from "./TextWidget";

const EmailWidget: React.FC<WidgetProps> = (props) => (
  <TextWidget {...props} type="email" />
);

export default EmailWidget;
