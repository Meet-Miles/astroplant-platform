import { number, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LibrarySectionCard from "../../cards/LibrarySectionCard";

export default {
  component: LibrarySectionCard,
  title: "cards/Library Section Card",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const sectionData = {
    title: text("Title", "Section Title"),
    description: text(
      "Description",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ),
  };

  return (
    <LibrarySectionCard
      librarySection={sectionData}
      mediaCount={number("Media Count", 24)}
    />
  );
};
