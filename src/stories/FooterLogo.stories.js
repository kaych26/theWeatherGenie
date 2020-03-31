import React from "react";
import { storiesOf } from "@storybook/react";

import FooterLogo from "../components/FooterLogo";

storiesOf("FooterLogo", module)
  .add("FooterLogo_copyright", () => <FooterLogo date="2020"/>)
    