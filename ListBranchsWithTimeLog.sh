#!/bin/bash

echo "BRANCH LIST WITH BRANCH LAST DATE AND TIME COMMIT UPDATE";
echo " ";
echo " ";
sleep 1;


echo "!!!THE CODE IT IS RUNNING!!!";
echo " ";
echo '[for k in $(git branch... do... git show --pretty=format... done | sort -r]';
echo " ";
echo " ";
sleep 0.5;


for k in $(git branch | perl -pe s/^..//); do echo -e $(git show --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k -- | head -n 1)\\t$k; done | sort -r;
