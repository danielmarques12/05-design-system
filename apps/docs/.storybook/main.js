const path = require("path");

module.exports = {
  stories: [
    "../src/pages/home.stories.mdx",
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    // some configs
    if (configType === 'PRODUCTION') {
      config.base = '/05-ignite-ui/';
    }

    return config
  },
};
