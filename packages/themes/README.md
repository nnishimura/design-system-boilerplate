# @design-system-boilerplate/themes

Themes for applying typography scales / color / spacing scales in design system

## Getting Started

```
npm install -S @design-system/themes

```

## Installation

app.scss
```
$selector-root-design-system: ':root'; // any selector for design-system theme

@import '~@design-system/themes/design-system.scss';
```

## How to use

All theming variables will be exposed as CSS variables after importing theme CSS file.

```html
<button class="button-primary">
  themeable button
</button>

<style lang="scss" scoped>
.button-primary {
  background-color: var(#{--primary-color});
}
</style>
```

## IE11 support

Theme is powered by CSS variables and we need to add polyfills for IE11 support.

```
npm install css-vars-ponyfill --save
```

App.vue
```
import cssVars from "css-vars-ponyfill"
```

## References
* [Breaking Change: CSS Variable Syntax](https://sass-lang.com/documentation/breaking-changes/css-vars)
