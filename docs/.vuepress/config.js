const autometa_options = {
  enable: true, // enables/disables everything - control per page using frontmatter
  image: true, // regular meta image used by search engines
  twitter: true, // twitter card
  og: true, // open graph: facebook, pinterest, google+
  schema: true, // schema.org for google
  site: {
    name: "CBL Letter",
  },
  author: {
    name: "Jeremy Hamilton"
  },
  canonical_base: "",
  image_sources: [
    "frontmatter",
    /!\[.*?\]\((.*?)\)/i, // markdown image regex
    /<img.*?src=['"](.*?)['"]/i // html image regex
  ]
};

module.exports = {
  title: "CBL Letter",
  description:
    "The CBL letter is a collection of research that asks questions about the fundamental reasoning behind biblical literalism.",
  ga: "UA-44595227-2",
  themeConfig: {
    domain: "",
    nav: [{ text: "Home", link: "" }],
    sidebarDepth: 1,
    sidebar: [
      ["/", "Title Page"],
      ["/preface/", "Preface"],
      ["/dedication/", "Dedication"],
      ["/introduction/", "Introduction"],
      ["/science/", "Science"],
      ["/other/", "Other"],
      ["/conclusion/", "Conclusion"],
      ["/epilogue/", "Epilogue"]
    ],
    repo: "flyingcircle/book",
    docsRepo: "flyingcircle/book",
    repoLabel: "GitHub",
    editLinks: false,
    editLinkText: "Help us improve this page!",
    author: "Jeremy Hamilton"
  },
  plugins: [["autometa", autometa_options]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "CBL Letter",
      description:
        "The CBL letter is a collection of research that asks questions about the fundamental reasoning behind biblical literalism."
    }
  },
  serviceWorker: true,
  markdown: {
    config: md => {
      md.use(require("markdown-it-attrs"));
    }
  }
};
