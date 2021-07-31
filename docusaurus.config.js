/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'WeCount',
  url: 'https://docs.wecount.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'wecount-dev',
  projectName: 'wecount',
  onBrokenLinks: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },
  themeConfig: {
    navbar: {
      title: 'WeCount',
      logo: {
        alt: 'WeCount',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/about/intro', label: 'About', position: 'left' },
        { to: '/docs/feature/overview', label: 'Feature', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/wecount-dev/wecount',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/about/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://dooboolab.com/joinSlack',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/dooboolab',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dooboolab.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/wecount-dev/wecount-docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
