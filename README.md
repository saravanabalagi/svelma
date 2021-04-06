<h1 align="center">Svelma</h1>

<div align="center">

<a href="https://www.npmjs.com/package/svelma-enhanced"><img src="https://img.shields.io/npm/v/svelma-enhanced.svg" /></a>
<a href="https://www.npmjs.com/package/svelma-enhanced"><img src="https://img.shields.io/npm/l/svelma-enhanced.svg" /></a>
<a href="https://bundlephobia.com/result?p=svelma-enhanced"><img src="https://badgen.net/bundlephobia/minzip/svelma-enhanced"></a>
<a href="https://travis-ci.org/saravanabalagi/svelma"><img src="https://travis-ci.org/saravanabalagi/svelma.svg?branch=master"></a>

Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework. Some features are experimental and are being developed. Pull requests are welcome. Forked from https://github.com/c0bra/svelma

</div>


## Features


## Documentation

[See docs + demos site here](https://saravanabalagi.github.io/svelma)

## Setup

#### 1. Install svelma and dependencies via npm

```sh
yarn add bulma svelma-enhanced
yarn add -D node-sass svelte-preprocess rollup-plugin-postcss
```

#### 2. Add the postcss plugin to your rollup config

```js
// rollup.config.js
import postcss from 'rollup-plugin-postcss'
import preprocess from 'svelte-preprocess'

// ...

export default {
  // ...
  plugins: [
    svelte({
      // ...
      preprocess: preprocess()
    }),

    postcss(),
  }
}
```

#### 3. Import Bulma's CSS and Svelma components

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
</script>

<button type="is-primary">I'm a Button!</button>
```

#### 4. Include [Font Awesome](https://fontawesome.com/) icons

From CDN in your HTML page:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
```

Or as an npm package imported into your root component:

```sh
yarn add @fortawesome/fontawesome-free
```

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
</script>
```

## SSR

If you are doing Server-Side Rendering (SSR) with Sapper, you'll need to import the `.svelte` files directly so that your app can compile them, rather than importing from the compiled module.

i.e.:

```js
import Button from 'svelma/src/components/Button.svelte'
```

instead of

```js
import { Button } from 'svelma'
```

## License

See attached [Licence](LICENCE)
