const autometa_options = {
  enable: true, // enables/disables everything - control per page using frontmatter
  image: true, // regular meta image used by search engines
  twitter: true, // twitter card
  og: true, // open graph: facebook, pinterest, google+
  schema: true, // schema.org for google
  site: {
    name: "Questions for My Church",
  },
  author: {
    name: "Jeremy Hamilton"
  },
  canonical_base: "https://flyingcircle.github.io/book/dist/",
  image_sources: [
    "frontmatter",
    /!\[.*?\]\((.*?)\)/i, // markdown image regex
    /<img.*?src=['"](.*?)['"]/i // html image regex
  ]
};

const social_share_options = {
  fallbackImage: '/images/candle-icon.png'
}

module.exports = {
  title: "QMC",
  description:
    "Questions for My Church is a collection of research that asks questions about the fundamental reasoning behind biblical literalism.",
  ga: "UA-44595227-2",
  base: "/book/",
  themeConfig: {
    domain: "https://flyingcircle.github.io/book/",
    nav: [{ text: "Home", link: "https://flyingcircle.github.io/book/" }],
    sidebarDepth: 1,
    sidebar: [
      ["/", "Title Page"],
      ["/preface/", "Preface"],
      ["/dedication/", "Dedication"],
      ["/introduction/", "Introduction"],
      ["/ot/", "Old Testament"],
      ["/flood/", "The Flood"],
      ["/prophecies/", "Prophecies"],
      ["/gospels/", "Gospels"],
      ["/paul/", "Paul"],
      ["/peter/", "Peter"],
      ["/nt/", "New Testament"],
      ["/errors/", "Errors"],
      ["/other/", "Other"],
      ["/conclusion/", "Conclusion"],
      //["/q&a/", "Q & A"]
    ],
    repo: "flyingcircle/book",
    docsRepo: "flyingcircle/book",
    repoLabel: "GitHub",
    editLinks: false,
    editLinkText: "Help us improve this page!",
    author: "Jeremy Hamilton"
  },
  plugins: [["social-share", social_share_options, "autometa", autometa_options]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "QMC",
      description:
        "Questions for My Church is a collection of research that asks questions about the fundamental reasoning behind biblical literalism."
    }
  },
  serviceWorker: true,
  markdown: {
    config: md => {
      md.use(require("markdown-it-attrs"));
    }
  }
};
