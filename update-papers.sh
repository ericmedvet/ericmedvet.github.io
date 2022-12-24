#!/bin/sh


rm -r content/publications/*
node update-papers.js 'https://docs.google.com/spreadsheets/d/1V4DHMqSTC0_ACR7T0FvwdPoxX2X92YMdj2fNqrwnuHg/gviz/tq?tqx=out:json' content/publications/ 'Medvet, Eric' 'E'
