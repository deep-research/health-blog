// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Arkady/Documents/Bootcamp/Projects/health-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\layout-index.json"),
  "hello-world.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\hello-world.json"),
  "dev-404-page.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\dev-404-page.json"),
  "404.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\404.json"),
  "index.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\index.json"),
  "404-html.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\404-html.json"),
  "heart-health.json": require("C:\\Users\\Arkady\\Documents\\Bootcamp\\Projects\\health-blog\\.cache\\json\\heart-health.json")
}