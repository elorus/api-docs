#!/bin/sh
echo "checking out to: api-docs branch -> master" &&
git checkout DP-7 &&
sleep 3 &&
echo "deleting hugo public folder" &&
rm -rf public/ &&
sleep 3 &&
echo "building hugo public folder" &&
hugo &&
sleep 3 &&
echo "checking out to: api-docs branch -> gh-pages" &&
git checkout gh-pages-test &&
sleep 3 &&
echo "deleting all content except 'public' folder and git files" &&
find . -not \( -name '.' -or -name '..' -or -name '.gitignore' -or -path './public*' -or -path './.idea*' -or -path './.git*' \) -exec rm -rf "{}" \; &&
sleep 3 &&
echo "copying content from 'public' folder to gh-pages" &&
cp -r public/* . &&
sleep 3 &&
echo "removing 'public' folder" &&
rm -rf public &&
sleep 3 &&
echo "adding all changes" &&
git add -A &&
sleep 3 &&
echo "committing all changes" &&
git commit -a -m 'committing all changes' &&
sleep 3 &&
echo "pushing to gh-pages using" &&
git push &&
sleep 3 &&
echo build success