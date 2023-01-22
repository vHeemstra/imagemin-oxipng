import {promises as fs} from 'node:fs';
import isPng from 'is-png';
import test from 'ava';
import imageminOxipng from './index.js';

test('minify a PNG', async t => {
	const buffer = await fs.readFile(new URL('fixture.png', import.meta.url));
	const data = await imageminOxipng({
		optimization: 4,
		strip: 'safe',
	})(buffer);
	t.true(isPng(data));
	t.true(data.length > 0);
	t.true(data.length < buffer.length);
});
