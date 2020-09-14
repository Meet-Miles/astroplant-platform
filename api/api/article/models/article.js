"use strict";

const slugify = require("slugify");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      // Auto creating the slug
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }

      // If the article is marked as published
      if (data.published) {
        // Updating the publication date
        // If a value is given we use it otherwise we make the publication date the current one
        if (!data.published_at) {
          data.published_at = new Date();
        }
      }

      // Creating a preview if there is none
      if (!data.preview) {
        strapi.api["article"].config.functions.preview.addPreview(data);
      }
    },
    async beforeUpdate(params, data) {
      // Generating a preview if it was emptied
      if (data.preview === null) {
        await strapi.api["article"].config.functions.preview.updatePreview(
          params,
          data
        );
      }

      // Auto updating the slug
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }

      // If the article is marked as published
      if (data.published) {
        // Updating the publication date
        // If a value is given we use it otherwise we make the publication date the current one
        if (!data.published_at) {
          data.published_at = new Date();
        }
      }
    }
  }
};
