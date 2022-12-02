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
find . -not \( -name '.' -or -name '..' -or -name '.gitignore' -or -path './public*' -or -path './.idea*' -or -path './.git*' \) -exec rm -rf "{}" \; &&
echo "copying content from 'public' folder to gh-pages" &&
cp -r public/* . &&
echo "checking if 'public' folder is in .gitignore and adding it " &&
if grep -Fxq "public/" .gitignore
  then
    echo "'public/' already in .gitignore"
  else
    echo "'public/' NOT found in gh-pages .gitignore, adding it"
    echo -e "public/" >> .gitignore
fi
if grep -Fxq ".hugo_build.lock" .gitignore
  then
    echo "'.hugo_build.lock' already in .gitignore"
  else
    echo "'.hugo_build.lock' NOT found in gh-pages .gitignore, adding it"
    echo -e ".hugo_build.lock" >> .gitignore
fi && sleep 1 &&
echo "commiting and adding all changes to gh-pages" &&
git commit -a -m 'committing all changes' &&
echo "pushing to gh-pages using --force" &&
git push --force &&
echo build success