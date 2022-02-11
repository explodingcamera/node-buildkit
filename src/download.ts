import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { request } from 'undici';
import tar from 'tar';
import { pipeline } from 'node:stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const version = '0.9.3';

const supportedArchs = {
	linux: ['amd64', 'arm-v7', 'arm64'],
	darwin: ['amd64', 'arm64'],
	windows: ['amd64', 'arm64'],
};

const getURL = () => {
	let arch = os.arch();
	const platform = os.platform();

	if (arch === 'x64') arch = 'amd64';

	if (!Object.keys(supportedArchs).includes(platform))
		return new Error(`unsupported platform: ${platform}`);
	const deviceOs = platform as keyof typeof supportedArchs;

	if (!supportedArchs[deviceOs].includes(arch))
		return new Error(`unsupported architecture: ${arch}`);

	const file = `buildkit-v${version}.${deviceOs}-${arch}.tar.gz`;
	return `https://github.com/moby/buildkit/releases/download/v${version}/${file}`;
};

const download = async () => {
	const url = getURL();
	if (url instanceof Error) throw url;
	console.log(join(__dirname, '../bin'));
	const resp = await request(url, { maxRedirections: 2, method: 'GET' });

	await pipeline(
		resp.body,
		tar.x({
			strip: 1,
			C: join(__dirname, '../bin'),
		}),
	);
};

download()
	.then(() => process.exit(0))
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
