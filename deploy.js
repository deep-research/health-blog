var ghpages = require('gh-pages');
var fs = require('fs');

fs.writeFile('dist/CNAME', "healthwritings.com", function(err) {});
ghpages.publish('dist', function(err) {});