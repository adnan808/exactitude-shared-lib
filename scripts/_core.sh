unameOut=$(uname -a)
case "${unameOut}" in
    *Microsoft*)     OS="WSL";; #must be first since Windows subsystem for linux will have Linux in the name too
    *microsoft*)     OS="WSL2";; #WARNING: My v2 uses ubuntu 20.4 at the moment slightly different name may not always work
    Linux*)     OS="Linux";;
    Darwin*)    OS="Mac";;
    CYGWIN*)    OS="Cygwin";;
    MINGW*)     OS="Windows";;
    *Msys)     OS="Windows";;
    *)          OS="UNKNOWN:${unameOut}"
esac

if [ "$OS" != "Linux" ] & [ "$OS" != "Mac" ]; then
  echo "SCRIPS NOT SUPPORT CURRENT OS: $OS";
  exit 0
fi;

COLOR_ANY() {
  echo "\e[$1m"
}
COLOR_TEXT="\e[32m"
COLOR_END="\e[0m"


BASE_DIR=$(dirname "$0")
BASE_DIR=$(cd "$MY_PATH" && pwd)

BUILD=NO
for i in "$@"; do
  case $i in
   -d=*|--base_dir=*)
     BASE_DIR+="/${i#*=}"
     shift # past argument=value
     ;;
   -t=*|--tables=*)
     TABLES+="${i#*=}"
     shift # past argument=value
     ;;
    -nb|--no-build)
    BUILD=NO
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

if [[ "$BUILD" == "YES" ]]; then
  cd shared
  npm run build
  cd ..
fi