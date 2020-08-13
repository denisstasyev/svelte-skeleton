# svelte-skeleton

[![NPM version](https://img.shields.io/npm/v/svelte-skeleton.svg?style=flat)](https://www.npmjs.com/package/svelte-skeleton) [![NPM downloads](https://img.shields.io/npm/dm/svelte-skeleton.svg?style=flat)](https://www.npmjs.com/package/svelte-skeleton) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Simple implementation of SVG skeletons in Svelte 3

![example](https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif)

## :rocket: Features

This is Svelte's component to create custom SVG skeletons to improve level of UX of loading images and interface.

- Easy to use (Svelte component allow to use any SVG forms, such as `<rect />` and `<circle />`)
- Fully customizable: you can adjust the colors, sizes and speed.
- Light size
- Pure SVG: any custom SVG shapes can be used
- All backgrounds within one Svelte component will be synchronized

P.S. It's recommended to use this package only for middle or large images. If you want to achieve the best UX for icons, use this package with `animate = false`. Also you can use [svelte-image-loader](https://github.com/denisstasyev/svelte-image-loader) ([NPM package](https://www.npmjs.com/package/svelte-image-loader)) to smooth the moment the image appears.

## Install

```bash
npm i svelte-skeleton
```

## Usage

```html
<script>
  import Skeleton from 'svelte-skeleton'

  ...
</script>

<Skeleton height="360" width="360">
  <rect width="96" height="72" x="0" y="0" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="19" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="43" rx="5" ry="5" />

  <rect width="96" height="72" x="0" y="96" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="115" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="139" rx="5" ry="5" />

  <!-- Any custom SVG shapes -->
</Skeleton>
```

Also you can combine it with Svelte's `{#await ...}`:

```html
{#await promise}
<!-- promise is pending -->
<Skeleton height="360" width="360">
  <rect width="96" height="72" x="0" y="0" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="19" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="43" rx="5" ry="5" />
</Skeleton>
{:then value}
<!-- promise was fulfilled -->
<YourCoolComponent {value} />
{:catch error}
<!-- promise was rejected -->
<Error title="{error.message}" />
{/await}
```

## API

### Parameters

| Name           | Type    | Default     | Description           |
| -------------- | ------- | ----------- | --------------------- |
| primaryColor   | string  | `'#ebecef'` | Main background color |
| secondaryColor | string  | `'#f5f5f7'` | Animation line color  |
| height         | number  | `200`       |                       |
| width          | number  | `400`       |                       |
| speed          | number  | `2`         |                       |
| animate        | boolean | `true`      |                       |

Please note that some older browsers (like Internet Explorer 11) do not support SVG animations. They will only show the background color without the animation line. To create skeletons for these browsers, you need to write your own CSS animations.

## License

MIT &copy; [Denis Stasyev](https://github.com/denisstasyev)
