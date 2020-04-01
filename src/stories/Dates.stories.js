import React from "react";
import { storiesOf } from "@storybook/react";

import Date from "../components/Today";

storiesOf("Date", module).add("Date", () => <Date date="Today's Date" />);
