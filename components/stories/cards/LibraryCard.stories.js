import { withKnobs } from "@storybook/addon-knobs/react";
import React from "react";
import LibraryCard from "../../cards/LibraryCard";

export default {
  component: LibraryCard,
  title: "cards/LibraryCard",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <LibraryCard />;
};
