#!/bin/sh
echo "checking out to: api-docs branch -> master" &&
git checkout DP-7 &&

echo "pulling from: api-docs branch -> master" &&
git pull &&

echo "deleting hugo public folder" &&
rm -rf public/ &&

echo "building hugo public folder" &&
hugo &&

echo "checking out to: api-docs branch -> gh-pages" &&
git checkout gh-pages-test &&

echo "deleting all content except 'public' folder and git files" &&
find . -maxdepth 1 -not \( -name '.' -or -name '..' -or -name '.gitignore' -or -path './public*' -or -path './.idea*' -or -path './.git*' \) -exec rm -rf "{}" \; &&

echo "copying content from 'public' folder to gh-pages" &&
cp -r public/* . &&

echo "removing 'public' folder" &&
rm -rf public &&

echo "adding all changes" &&
git add -A &&

echo "committing all changes" &&
git commit -a -m 'committing all changes' &&

echo "pushing to gh-pages" &&
git push &&

echo "build success"