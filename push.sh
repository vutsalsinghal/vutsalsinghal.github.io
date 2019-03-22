#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git checkout master

touch temp
git add .
git commit -m "Updated build files"

git push https://vutsalsinghal:${GH_TOKEN}@${TRAVIS_REPO_SLUG} HEAD:master > /dev/null 2>&1
