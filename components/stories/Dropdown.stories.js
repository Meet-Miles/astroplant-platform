import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Arrow from "../../public/icons/arrow-down.svg";
import Dropdown from "../Dropdown";

export default {
  component: Dropdown,
  title: "Dropdown",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const reverse = boolean("Reverse", false);

  return (
    <Dropdown
      color={select("Color", [
        "light",
        "darkLight",
        "primary",
        "secondary",
        "secondary",
        "error",
      ])}
      reverse={reverse}
      onClick={action("Clicked !")}
      icon={<Arrow />}
    />
  );
};
