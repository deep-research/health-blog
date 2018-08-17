import ghpages from 'gh-pages';
import fs from 'fs';

fs.writeFile('dist/CNAME', "your-custom-domain.com", function(err) {});
ghpages.publish('dist', function(err) {});