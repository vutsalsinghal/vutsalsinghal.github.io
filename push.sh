#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git checkout master

rm -r static asset-manifest.json index.html manifest.json
cp -r build/* .
git add .
git commit -m "Updated build files"

git push https://vutsalsinghal:${GH_TOKEN}@https://github.com/vutsalsinghal/vutsalsinghal.github.io.git master > /dev/null 2>&1
