const { INIT_CWD, PWD } = process.env;

if (!INIT_CWD || INIT_CWD === PWD || INIT_CWD.indexOf(PWD) === 0) {
	console.info(`Skipping 'postinstall' on local install`);
	process.exit(0);
}

import('./lib/download')
	.then(x => console.log(x))
	.catch(e => console.error(e));
