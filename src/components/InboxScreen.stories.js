import React from "react";
import { storiesOf } from "@storybook/react";
import { InboxScreen } from "./InboxScreen";
import App from "../App";

storiesOf("InboxScreen", module)
  .addDecorator(story => <App>{story()}</App>)
  .add("default", () => <InboxScreen />)
  .add("error", () => <InboxScreen error="Something" />);
