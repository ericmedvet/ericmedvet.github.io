#!/bin/sh

rm -f master.zip
wget https://github.com/ericmedvet/slides/archive/master.zip

rm -r static/teaching/1920-advancedprogramming/slides/*
unzip master.zip "slides-master/advanced-programming-2020/*"
mv slides-master/advanced-programming-2020/* static/teaching/1920-advancedprogramming/slides

rm -r static/teaching/2021-advancedprogramming/slides/*
unzip master.zip "slides-master/advanced-programming-2021/*"
mv slides-master/advanced-programming-2021/* static/teaching/2021-advancedprogramming/slides

rm -r slides-master
rm -f master.zip
