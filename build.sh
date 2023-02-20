#!/bin/sh
echo "checking out to: api-docs branch -> master" &&
git checkout master &&

echo "pulling from: api-docs branch -> master" &&
git pull origin master &&

echo "deleting hugo public folder" &&
rm -rf public/ &&

echo "building hugo public folder" &&
hugo &&

echo "checking out to: api-docs branch -> gh-pages" &&
git checkout gh-pages &&

echo "deleting all content except 'public' folder and git files" &&
find . -maxdepth 1 -not \( -name '.' -or -name '..' -or -name '.gitignore' -or -name 'CNAME' -or -path './public*' -or -path './.idea*' -or -path './.git*' \) -exec rm -rf "{}" \; &&

echo "copying content from 'public' folder to gh-pages" &&
cp -r public/* . &&

echo "removing 'public' folder" &&
rm -rf public &&

echo "adding all changes" &&
git add -A &&

echo "committing all changes" &&
git commit -a -m 'committing all changes' &&

echo "pushing to gh-pages" &&
git push origin gh-pages &&

echo "build success"