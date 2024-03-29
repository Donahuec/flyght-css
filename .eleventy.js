module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./flyght-css");
  eleventyConfig.addPassthroughCopy("./_assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  return {
    passthroughFileCopy: true,
  };
};
