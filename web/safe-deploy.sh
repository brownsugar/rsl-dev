#!/bin/bash
dest=.nuxt
prev=.nuxt.prev
tmp=.nuxt.tmp

if [ -d $prev ]; then
  rm -r $prev
fi
mv $dest $prev
mv $tmp $dest