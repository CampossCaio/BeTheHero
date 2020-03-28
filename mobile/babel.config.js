module.exports = function (api) {
  api.cache(true);
  return {
    // eslint-disable-next-line prettier/prettier
    presets: ['babel-preset-expo'],
  };
};
