## Shared module

### Install package

Go to [link](https://github.com/settings/tokens) generate token for read/write:packages

```bash
cat > .npmrc <<Template
@dashdevs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
Template
```

```
pnpm install @dashdevs/exactitude-shared-lib@latest
```

### Local Develpment you can creat symlink on the package

```
cd ./shared
pnpm link
cd ../api-website
pnpm link @dashdevs/exactitude-shared-lib
```

### Scripts

It's default build libs

```bash
pnpm run build
```

if need <b style="color:red">FORСE</b> update libs other services you can you scripts from ⚠️ root directory

```bash
./scripts/update_libs.sh
```

and for development mode it use with all of the above

```bash
pnpm run build:watch
```

### ORM

Use this lib [nest-typeorm](https://www.npmjs.com/package/@nestjs/typeorm) lib documentation : [Typeorm](https://typeorm.io/)

## Environment variables

You can specify non sensitive variables in .env file.

Sensitive variables should be stored separately.

