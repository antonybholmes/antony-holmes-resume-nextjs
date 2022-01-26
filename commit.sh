# format code
yarn run format

# make a sitemap etc
node ./src/scripts/create-sitemap.js

# commit
git add -A .
git commit -m "Bug fixes and updates."
git push -u origin main
