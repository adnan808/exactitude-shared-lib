#!/bin/bash

SERVICES=$(ls -d ../* | egrep -v "node|data|conf|lib|agent-|shared$SKIP")

source ./scripts/_core.sh

CLEAR_NODE_MODULE=NO
for i in "$@"; do
  case $i in
    -i=*|--install-one=*)
      SERVICES="${i#*=}"
      shift # past argument=value
      ;;
    -sp=*|--skip-pattern=*)
      SKIP="|${i#*=}"
      shift # past argument with no value
      ;;
    -cnm|--clear-node-modules)
      CLEAR_NODE_MODULE=YES
      shift # past argument with no value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac
done

for dir in $SERVICES ; do
  echo $(printf "📚 Update shared module: ${COLOR_TEXT}$dir${COLOR_END}")
  if [ ! -d $dir/node_modules/@vegainvestments/shared-lib ]; then
    echo $(printf "\_ Skip service without module $(COLOR_ANY 31)$dir${COLOR_END}")
    continue;
  fi
  rm -rf $dir/node_modules/@vegainvestments/shared-lib/dist/*
  rm -rf $dir/node_modules/@vegainvestments/shared-lib/libs/*
  rm -rf $dir/node_modules/@vegainvestments/shared-lib/*
  echo $(printf "\_ $(COLOR_ANY 31)Package removed${COLOR_END}")
  sleep 0.5
  echo $(printf "\_ Copy libs to $(COLOR_ANY 31)$dir${COLOR_END}")
  if [ -d ./dist ]; then
    cp -R ./dist $dir/node_modules/@vegainvestments/shared-lib/
  fi
  sleep 0.5
  cp -R ./libs $dir/node_modules/@vegainvestments/shared-lib/
  cp -R ./package.json $dir/node_modules/@vegainvestments/shared-lib/package.json
done
