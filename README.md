# Apollos Docs Site

## Preview

```
cd website
yarn start
```

Site is at `localhost:3000`

## Deploy

```
GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages
```
