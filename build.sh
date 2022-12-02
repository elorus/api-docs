#!/bin/sh
echo "checking out to: api-docs branch -> master" &&
git checkout DP-7 &&
echo "deleting hugo public folder" &&
rm -rf public/ &&
echo "building hugo public folder" &&
hugo &&
echo "checking out to: api-docs branch -> gh-pages" &&
git checkout gh-pages-test &&
echo "deleting all content except 'public' folder and git files" &&
find -not \( -name '.' -or -name '..' -or -name '.gitignore' -or -name 'public/' \) -exec rm -rf "{}" \;
echo "copying content from 'public' folder to gh-pages" &&
cp -r public/* . &&
echo "checking if 'public' folder is in .gitignore and adding it " &&
if grep -Fxq "public/" .gitignore
  then
    echo "'public/' already in .gitignore"
  else
    echo "'public/' NOT found in gh-pages .gitignore, adding it"
    echo "public/" >> .gitignore
fi &&
echo "commiting and adding all changes to gh-pages" &&
git commit -a -m 'committing all changes' &&
echo "pushing to gh-pages using --force" &&
git push --force &&
echo build success