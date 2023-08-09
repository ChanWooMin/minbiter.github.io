// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Minbiter's log",
  tagline: "문제에 대해 고민하고, 공부한 내용들을 기록하는 공간입니다",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://minbiter.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/minbiter.github.io/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "minbiter", // Usually your GitHub org/user name.
  projectName: "minbiter.github.io", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/ChanWooMin/minbiter.github.io/edit/main/",
        },
        blog: {
          blogSidebarTitle: "모든 게시물",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/ChanWooMin/minbiter.github.io/edit/main/",
          postsPerPage: "ALL",
          path: "blog",
          id: "blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Minbiter's log",
        logo: {
          alt: "Minbiter Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ChanWooMin",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "블로그",
                to: "/blog",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ChanWooMin",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minbiter's log, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
