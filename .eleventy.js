module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  return {
    passthroughFileCopy: true,
  };
};
