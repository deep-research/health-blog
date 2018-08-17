// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Arkady/Documents/Bootcamp/Projects/health-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\node_modules\\gatsby-plugin-offline\\app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\templates\\blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\offline-plugin-app-shell-fallback.json"),
  "heart-health.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\heart-health.json"),
  "new-article.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\new-article.json"),
  "404.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\404.json"),
  "index.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\index.json"),
  "404-html.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\404-html.json")
}