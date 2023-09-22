echo off

git add --all
git commit -m %1
git push -u origin main

echo "push completed!"
