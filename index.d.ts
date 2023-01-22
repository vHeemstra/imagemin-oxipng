// Type definitions for @vheemstra/imagemin-oxipng 2.0.0
// Project: https://github.com/vheemstra/imagemin-oxipng#readme
// Definitions by: Philip van Heemstra <https://github.com/vheemstra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

/**
 * Oxipng imagemin plugin
 */
export default function imageminOxipng(options?: Options): Plugin;

export interface Options {

	/**
	 * Optimization level.
	 * Possible values: 0, 1, 2, 3, 4, 5, 6 or 'max'.
	 *
	 * NOTE: Manually specifying a compression option (`options.zc`, `options.filters`, etc.) will override the optimization preset, regardless of the order you write the arguments.
	 *
	 * @default 2
	 */
	optimization?: number | 'max'

	/**
	 * Preserve file attributes if possible.
	 */
	preserve?: boolean

	/**
	 * Do not run any optimization passes.
	 */
	check?: boolean

	/**
	 * Strip metadata objects ['safe', 'all' or list].
	 *
	 * NOTE: Only either `options.strip` _**or**_ `options.keep` option can be set.
	 */
	strip?: 'safe' | 'all' | string[]

	/**
	 * Strip all optional metadata _except_ objects in the  list.
	 *
	 * NOTE: Only either `options.strip` _**or**_ `options.keep` option can be set.
	 */
	keep?: string[]

	/**
	 * Perform additional alpha optimizations.
	 */
	alpha?: boolean

	/**
	 * PNG interlace type [possible values: 0, 1].
	 */
	interlace?: number

	/**
	 * Use fast filter evaluation.
	 */
	fast?: boolean

	/**
	 * PNG delta filters (0,9).
	 *
	 * PNG delta filters:
	 * ```
	 *   0  =>  None
	 *   1  =>  Sub
	 *   2  =>  Up
	 *   3  =>  Average
	 *   4  =>  Paeth
	 * ```
	 * Heuristic filter selection strategies:
	 * ```
	 *   5  =>  MinSum    Minimum sum of absolute differences
	 *   6  =>  Entropy   Highest Shannon entropy
	 *   7  =>  Bigrams   Lowest count of distinct bigrams
	 *   8  =>  BigEnt    Highest Shannon entropy of bigrams
	 *   9  =>  Brute     Smallest compressed size (slow)
	 * ```
	 * @default [0,5]
	 */
	filters?: number[]

	/**
	 * zlib compression level (1-12).
	 *
	 * @default 11
	 */
	zc?: number

	/**
	 * No bit depth reduction.
	 */
	nb?: boolean

	/**
	 * No color type reduction.
	 */
	nc?: boolean

	/**
	 * No palette reduction.
	 */
	np?: boolean

	/**
	 * No grayscale reduction.
	 */
	ng?: boolean

	/**
	 * No reductions.
	 */
	nx?: boolean

	/**
	 * No IDAT recoding unless necessary.
	 */
	nz?: boolean

	/**
	 * Enable error recovery.
	 */
	fix?: boolean

	/**
	 * Write the output even if it is larger than the input.
	 */
	force?: boolean

	/**
	 * Maximum amount of time, in seconds, to spend on optimizations.
	 */
	timeout?: number

	/**
	 * Use the slower but better compressing Zopfli algorithm.
	 */
	zopfli?: boolean
}
