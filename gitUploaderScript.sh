#!/usr/bin/env bash


echo
echo "--------------------------------GIT LOG--------------------------------"
git log


echo
echo "------------------------------GIT STATUS------------------------------"
git status

echo
read -p "Enter Commit Message: " COMMIT

echo
echo "-----------------------------GIT ADD PATH--> $(pwd) -----------------------------"
git add .

echo
echo "------------------------------GIT STATUS------------------------------"
git status

echo
echo "------------------------------GIT COMMIT Message-->"$COMMIT"------------------------------"
git commit -m "$COMMIT"

echo
echo "-------------------------GIT PUSH ORIGIN MASTER-------------------------"
git push origin main

echo
echo "--------------------------------GIT LOG--------------------------------"
git log