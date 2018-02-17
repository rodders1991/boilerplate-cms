#!/bin/sh
echo
if [ -a .commit ]
    then
    rm .commit
    npm run build
    git add dist/
    git commit --amend -C HEAD --no-verify
fi
exit
