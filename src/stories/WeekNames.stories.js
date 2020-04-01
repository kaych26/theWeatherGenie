import React from "react";
import { storiesOf } from "@storybook/react";

import WeekNames from "../components/WeekNames";

storiesOf("WeekNames", module)
  .add("WeekNames_Monday", () => <WeekNames name="Monday" />)
  .add("WeekNames_Tuesday", () => <WeekNames name="Tuesday" />)
  .add("WeekNames_Wednesday", () => <WeekNames name="Wednesday" />)
  .add("WeekNames_Thursday", () => <WeekNames name="Thursday" />)
  .add("WeekNames_Friday", () => <WeekNames name="Friday" />)
  .add("WeekNames_Saturday", () => <WeekNames name="Saturday" />)
  .add("WeekNames_Sunday", () => <WeekNames name="Sunday" />)

    