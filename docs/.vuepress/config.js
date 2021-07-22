module.exports = {
  lang: "en-US",
  title: "Code Monkeys",
  description: "Learn to Code like a Monkey",
  base: "/code-monkeys-blog/",

  themeConfig: {
    logo: "/images/code-monkeys-temp-logo.png",
    nav: [
      {
        text: "Topics",
        items: [
          { text: "LeetCode", link: "/topics/LeetCode/" },
          { text: "VuePress", link: "/topics/VuePress/" },
        ],
      },
      {
        text: "Resources",
        link: "/resources/",
      },
      {
        text: "Donate",
        link: "/donate/",
      },
    ],
  },

  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@goy/svg-icons",
    "vuepress-plugin-mathjax",
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/posts/",
            itemPermalink: "/posts/:year/:month/:day/:slug",
            layout: "IndexPost",
            pagination: {
              lengthPerPage: 2,
              layout: "IndexPost", // layout for the index page when page != 1
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: "topics",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["topic"],
            // Path of the `entry page` (or `list page`)
            path: "/topics/",
            // Layout of the `entry page` (list of tags)
            layout: "Topics",
            frontmatter: {
              title: "Topics",
              description: "Start learning & coding",
              topicDetails: [
                {
                  summary:
                    "You'll find detailed LeetCode solutions here including code, notes, links, diagrams, animations, & anything else that may be helpful!",
                  logo: "LeetCodeLogo.png",
                },
                {
                  summary:
                    "Learn how to use VuePress by following along with these tutorials!",
                  logo: "VuePressLogo.png",
                },
                {
                  summary: "Testing",
                  logo: "LeetCodeLogo.png",
                },
              ],
            },
            // Layout of the `scope page` (list of posts with this tag)
            scopeLayout: "IndexPost",
            pagination: {
              lengthPerPage: 2,
              layout: "IndexPost",
            },
          },
        ],
        sitemap: {
          hostname: "https://codemonkeys.io",
        },
      },
    ],
  ],
};
