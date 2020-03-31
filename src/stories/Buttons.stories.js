import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/Button";
// import "./Button.css";

storiesOf("Button", module)
  .add("More Days", () => <Button label="More Days..." type="more" />);
