export default {
  title: "Breezell-Doc",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo-touming-caibian.png",
    siteTitle: "reezell-Doc",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "/changelog" },
    ],
    // Social Icons
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/gRBk8rDsc" },
      { icon: "x", link: "https://x.com/BreezellCode" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 9h-3.02a15.43 15.43 0 0 0-1.08-5.02A8.03 8.03 0 0 1 18.93 11ZM12 4.04c.74 1.06 1.58 3.05 1.88 6.96h-3.76c.3-3.91 1.14-5.9 1.88-6.96ZM4.26 13h3.82c.12 1.88.45 3.56.94 4.93A8.03 8.03 0 0 1 4.26 13Zm3.82-2H4.26a8.03 8.03 0 0 1 4.76-4.93A15.6 15.6 0 0 0 8.08 11ZM12 19.96c-.74-1.06-1.58-3.05-1.88-6.96h3.76c-.3 3.91-1.14 5.9-1.88 6.96Zm2.83-2.03c.49-1.37.82-3.05.94-4.93h3.82a8.03 8.03 0 0 1-4.76 4.93Z"/></svg>',
        },
        link: "https://breezell.com",
        ariaLabel: "官网",
      },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Language Settings", link: "/settings-page-language-settings" },
        ],
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: true,
      next: true,
    },
    editLink: {
      pattern: 'https://github.com/Evavic44/adocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
