import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "../components/Title";

storiesOf("Titles", module)
  .add("Heaader Title", () => <Title title="Header TITLE"/>)
    