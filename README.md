# Website

[![Deploy Website](https://github.com/wecount-dev/wecount-docs/actions/workflows/ci-deploy.yml/badge.svg)](https://github.com/wecount-dev/wecount-docs/actions/workflows/ci-deploy.yml)
[![Deploy docs](https://github.com/wecount-dev/wecount-docs/actions/workflows/ci-build.yml/badge.svg)](https://github.com/wecount-dev/wecount-docs/actions/workflows/ci-build.yml)

Documents site for [WeCount](https://wecount.dev).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=1 yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
