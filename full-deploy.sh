#!/bin/sh

./update-papers.sh
./update-slides.sh

rm -r docs/*
hugo

git add .
git commit -m "full rebuild"

git push
