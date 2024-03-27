#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
git checkout main

cp index.html 404.html

git add -A
git commit -m 'deploy'

cd -

git subtree push --prefix dist origin gh-pages

cd -