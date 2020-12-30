#!/bin/sh

./update-papers.js
./update-slides.js

rm -r docs/*
hugo

git add .
git commit -m "full rebuild"

git push
