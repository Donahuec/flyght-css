const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  const isProd = process.env.ELEVENTY_ENV === "production";

  eleventyConfig.addPassthroughCopy("./flyght-css");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    passthroughFileCopy: true,
  };
};
