# x-zangief

> He is Zangief.

## Install

Using npm:

```bash
$ npm install x-zangief

```

## Usage

Import and register scripts.

```html
<script type="module">
import XZangief from './x-zangief/index.js';

customElements.define('x-zangief', XZangief);
</script>
```

Put `<x-zangief>`!

```html
<x-zangief type="combo"></x-zangief>
<x-zangief type="fail"></x-zangief>
<x-zangief type="piledriver"></x-zangief>
<x-zangief type="rolling"></x-zangief>
<x-zangief type="win"></x-zangief>
```

If `type` attribute is omitted, He appears randomly.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
