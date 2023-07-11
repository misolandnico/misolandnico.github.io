#!/bin/sh

# Build project
npm run build

# Add the dist branch
git add -f dist
git commit -m "dist added"

# Delete remote branch for gh-pages
git push origin --delete gh-pages

# Push branch anew
git subtree push --prefix dist/spa origin gh-pages
