# design-system-boilerplate

Design system boilerplate for monorepo lerna + yarn workspace setup.

Contains the following modules:

| Package name   | Description                                                 |
|----------------|-------------------------------------------------------------|
| [vue-ui-components](./packages/vue-ui-components) | Themable UI components built with vue2 + typescript         |
| [icons](./packages/icons)          | design-system icon font stylesheets                              |
| [typography](./packages/typography)     | Fonts file and font-face definitions for design-system brand font |
| [themes](./packages/themes)     | Theme tokens available in design System, like `--primary-color` |

## Features
* Typescript + Vue2
* [Lerna](https://github.com/lerna/lerna) + [yarn workspace](https://classic.yarnpkg.com/ja/docs/cli/workspace/) monorepo structure
* Auto-documentation by [storybook](https://storybook.js.org/)
* Custom theming support by [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## Getting Started

```
yarn install
npm run bootstrap
```

## Build all packages

```
npm run build
```

## Start storybook

```
npm run start
```

## How to publish

(First time only): If you want to use private npm repository, add the following in your `.npmrc`:

```
registry=YOUR_NPM_REPO_URL
//YOUR_NPM_REPO_URL:_authToken=[SOMETOKEN]
always-auth=true
strict-ssl=false
```

Commit all changes and execute the following:

```
npm run publish
```

This does the following:
* bump package versions
* create a release commit
* push the tag to remote origin

Please follow the [semver](https://docs.npmjs.com/about-semantic-versioning) methodology when deciding the version number - this is important to avoid introducing unexpected breaking change on library consumer.


## Other options

### Generate changelog and skip publish

```
lerna version --conventional-commits
```

## Resources & Reference
* [IBM corbon design system](https://github.com/carbon-design-system/carbon)
* [Github design system](https://primer.style/)
* [Atlasian design system](https://atlassian.design/components/select/)
* [Material design guide](https://material.io/design/)
* [good interview](https://www.uxpin.com/studio/blog/githubs-design-system-interview-diana-mounter/)
