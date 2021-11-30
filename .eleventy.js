const input = `src`;

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection(`posts`, function(collectionApi) {
    return collectionApi.getFilteredByGlob(`${input}/posts/*.md`);
  });

  eleventyConfig.addPassthroughCopy(`${input}/css`);

  return {
    dir: {
      input: input
    }
  };
};
