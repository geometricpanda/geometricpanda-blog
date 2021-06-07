module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--breakpoint-md': '(min-width: 500px)',
            '--breakpoint-lg': '(min-width: 768px)',
          },
        },
      ],
    },
  },
};
