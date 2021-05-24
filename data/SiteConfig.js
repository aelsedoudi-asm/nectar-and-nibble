const config = {
  siteTitle: "Huckleberry's Natural Market", // Site title.
  siteTitleShort: "Huckleberry's Natural Market", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Huckleberry's Natural Market - Keeping it local since 1996", // Alternative site title for SEO.
  siteLogo: "/logos/HuckleberryLogo.png", // Logo used for SEO and manifest.
  siteUrl: "https://nectarandnibble.gatsbyjs.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Huckleberry's Natural Market - We envisioned customers being able to shop fully at our store picking from organic produce, seafood, meats, dairy products, pre-packaged foods, to health, beauty and wellness items that are also clean, animal cruelty free, and sustainably sourced.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Huckleberry's Natural Market RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "G-MT926N6DEZ", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  siteLinks: [
    {
      label: "Home",
      url: "/",
      iconClassName: "fa fa-github",
    },
    {
      label: "About",
      url: "/about",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Join Now",
      url: "/join-now",
      iconClassName: "fa fa-envelope",
    },
    {
      label: "Interest",
      url: "/interest",
      iconClassName: "fa fa-envelope",
    },
  ],
  userName: "Advanced User", // Username to display in the author segment.
  userEmail: "AdvancedUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "This would be a users descrpition", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021 Huckleberry's Natural Market", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  primaryColor: "#442f4c",
  secondaryColor: "#a56427",
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
