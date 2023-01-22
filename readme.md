# imagemin-oxipng

> [imagemin](https://github.com/imagemin/imagemin) plugin using [`oxipng`](https://github.com/shssoichiro/oxipng) to minify PNG images.

## Install

```
$ npm install --save @vheemstra/imagemin-oxipng
```


## Usage

```js
import imagemin from 'imagemin';
import imageminOxipng from '@vheemstra/imagemin-oxipng';

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminOxipng()
		]
	});

	console.log('Images minified!');
})();
```


## API

### imageminOxipng(options?)(buffer)

Returns a `Promise<Buffer>` with the converted image.

#### buffer
Type: `Buffer`

> Buffer to optimize.

#### options
Type: `object`

> For more information on options, see also [**oxipng**s documentation](https://github.com/shssoichiro/oxipng#usage).

#### options.optimization
Type: `number | 'max'`<br>
Default: `2`

> Optimization level - [possible values: 0, 1, 2, 3, 4, 5, 6, 'max'].

_NOTE: Manually specifying a compression option (`options.zc`, `options.filters`, etc.) will override the optimization preset, regardless of the order you write the arguments._

#### options.preserve
Type: `boolean`
> Preserve file attributes if possible.

#### options.check
Type: `boolean`
> Do not run any optimization passes.

#### options.strip <sup>*</sup>
Type: `'safe' | 'all' | string[]`
> Strip metadata objects ['safe', 'all' or list].

_* Only either `options.strip` **or** `options.keep` option can be set._

#### options.keep <sup>*</sup>
Type: `string[]`
> Strip all optional metadata _except_ objects in the  list.

_* Only either `options.strip` **or** `options.keep` option can be set._

#### options.alpha
Type: `boolean`
> Perform additional alpha optimizations.

#### options.interlace
Type: `number`
> PNG interlace type [possible values: 0, 1].

#### options.fast
Type: `boolean`
> Use fast filter evaluation.

#### options.filters
Type: `number[]`<br>
Default: `[0,5]`
> PNG delta filters (0-9).

<table>
	<tr>
		<th>number</th>
		<th colspan=2 align="left">PNG delta filters</th>
	</tr>
	<tr><td>0</td><td colspan=2>None</td></tr>
	<tr><td>1</td><td colspan=2>Sub</td></tr>
	<tr><td>2</td><td colspan=2>Up</td></tr>
	<tr><td>3</td><td colspan=2>Average</td></tr>
	<tr><td>4</td><td colspan=2>Paeth</td></tr>
	<tr>
		<th>number</th>
		<th colspan=2 align="left">Heuristic filter selection strategy</th>
	</tr>
	<tr><td>5</td><td>MinSum</td><td>Minimum sum of absolute differences</td></tr>
	<tr><td>6</td><td>Entropy</td><td>Highest Shannon entropy</td></tr>
	<tr><td>7</td><td>Bigrams</td><td>Lowest count of distinct bigrams</td></tr>
	<tr><td>8</td><td>BigEnt</td><td>Highest Shannon entropy of bigrams</td></tr>
	<tr><td>9</td><td>Brute</td><td>Smallest compressed size (slow)</td></tr>
</table>

#### options.zc
Type: `number`<br>
Default: 11
> zlib compression level (1-12).

#### options.nb
Type: `boolean`
> No bit depth reduction.

#### options.nc
Type: `boolean`
> No color type reduction.

#### options.np
Type: `boolean`
> No palette reduction.

#### options.ng
Type: `boolean`
> No grayscale reduction.

#### options.nx
Type: `boolean`
> No reductions.

#### options.nz
Type: `boolean`
> No IDAT recoding unless necessary.

#### options.fix
Type: `boolean`
> Enable error recovery.

#### options.force
Type: `boolean`
> Write the output even if it is larger than the input.

#### options.timeout
Type: `number`
> Maximum amount of time, in seconds, to spend on optimizations.

#### options.zopfli
Type: `boolean`
> Use the slower but better compressing Zopfli algorithm.


## License

MIT © [Imagemin](https://github.com/imagemin)<br>
MIT © [OxiPNG](https://github.com/shssoichiro/oxipng) by [Josh Holmer](https://github.com/shssoichiro)<br>
This package is made by [Philip van Heemstra](https://github.com/vHeemstra)
