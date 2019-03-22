#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git branch

touch temp
git status
git add .
git commit -m "Updated build files"

git push https://vutsalsinghal:${GH_TOKEN}@github.com/$vutsalsinghal/vutsalsinghal.github.io HEAD:master > /dev/null 2>&1