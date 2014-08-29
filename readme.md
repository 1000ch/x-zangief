# x-zangief

![](https://raw.githubusercontent.com/1000ch/x-zangief/master/img/zangief-combo.gif)

## Usage

Install using `bower`.

```bash
$ bower install 1000ch/x-zangief
```

Import `x-zangief.html` in your HTML.

```html
<link rel='import' src='bower_components/x-zangief/x-zangief.html'>
```

Put `<img is='x-zangief'>`!

```html
<img is='x-zangief' zangief-type='combo'>
<img is='x-zangief' zangief-type='fail'>
<img is='x-zangief' zangief-type='piledriver'>
<img is='x-zangief' zangief-type='rolling'>
<img is='x-zangief' zangief-type='win'>
```

If `zangief-type` attribute is omitted, He appears randomly.