#!/bin/bash

if [ -z "$1" ]
then
    echo "Version parameter is set to an empty string"
else
    echo "Taging version $1"
    git checkout -b $1
    node webpack
    git add -f build
    git commit -am "release version $1"
    git tag -a $1 -m "release version $1"
    git push origin refs/tags/$1
    git checkout -
    git branch -D $1
fi
