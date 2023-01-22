import {Buffer} from 'node:buffer';
import execBuffer from 'exec-buffer';
import isPng from 'is-png';
import oxipng from 'oxipng-bin';

const imageminOxipng = (options = {}) => input => {
	options = {...options};

	if (!Buffer.isBuffer(input)) {
		return Promise.reject(new TypeError(`Expected \`input\` to be of type \`Buffer\` but received type \`${typeof input}\``));
	}

	if (!isPng(input)) {
		return Promise.resolve(input);
	}

	const args = [];

	[ 'optimization', 'optimisation', 'opt', 'o' ].forEach(k => {
		if (typeof options[k] === 'string' && options[k] === 'max') {
			args.push('-o', options[k]);
		} else if (
			typeof options[k] === 'number' &&
			0 <= options[k] &&
			6 >= options[k]
		) {
			args.push('-o', options[k]);
		}
	});

	[ 'preserve', 'p' ].forEach(k => {
		if (typeof options[k] !== 'undefined' && Boolean(options[k])) {
			args.push('-p');
		}
	});

	[ 'check', 'c' ].forEach(k => {
		if (typeof options[k] !== 'undefined' && Boolean(options[k])) {
			args.push('-c');
		}
	});

	if (typeof options.strip === 'string') {
		args.push('--strip', options.strip);
	} else if (typeof options.strip === 'object' && Array.isArray(options.strip)) {
		args.push('--strip', options.strip.join(','));
	} else if (typeof options.s !== 'undefined' && Boolean(options.s)) {
		args.push('-s');
	} else if (typeof options.keep === 'object' && Array.isArray(options.keep)) {
		args.push('--keep', options.keep.join(','));
	}

	[ 'alpha', 'a' ].forEach(k => {
		if (typeof options[k] !== 'undefined' && Boolean(options[k])) {
			args.push('-a');
		}
	});

	[ 'interlace', 'i' ].forEach(k => {
		if (typeof options[k] === 'number') {
			args.push('-i', options[k]);
		}
	});

	[ 'filters', 'f' ].forEach(k => {
		if (
			typeof options[k] !== 'undefined' &&
			Array.isArray(options[k]) &&
			options[k].filter(v => 0 <= v && 9 >= v).length > 0
		) {
			args.push('-f', options[k].filter(v => 0 <= v && 9 >= v).join(','));
		}
	});

	[ 'zc' ].forEach(k => {
		if (
			typeof options[k] === 'number' &&
			1 <= options[k] &&
			12 >= options[k]
		) {
			args.push('--zc', options[k]);
		}
	});

	[
		'fast',
		'nb',
		'nc',
		'np',
		'ng',
		'nx',
		'nz',
		'fix',
		'force',
	].forEach(k => {
		if (typeof options[k] !== 'undefined' && Boolean(options[k])) {
			args.push(`--${k}`);
		}
	});

	[ 'zopfli', 'Z' ].forEach(k => {
		if (typeof options[k] !== 'undefined' && Boolean(options[k])) {
			args.push('-Z');
		}
	});

	[ 'timeout' ].forEach(k => {
		if (typeof options[k] === 'number') {
			args.push('--timeout', options[k]);
		}
	});


	args.push('-o', execBuffer.output, execBuffer.input);

	return execBuffer({
		input,
		bin: oxipng,
		args
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};

export default imageminOxipng;
