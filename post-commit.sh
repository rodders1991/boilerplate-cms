#!/bin/sh
echo
if [ -e .commit ];
    then
    rm .commit
    npm run build
    git add dist/
    git commit --amend -C HEAD --no-verify
fi
exit
