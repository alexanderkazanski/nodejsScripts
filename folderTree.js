const fs = require('fs');

const tree = { 
	root: {
		http: [],
		fs: [], 
		os: [],
		typescript: [],
		events: [],
		// three: ['decade', { another: [ {four: ['alexander', 'kazanski']}, 'day', 'week' ]}]
	} 
}

const root = Object.keys(tree)[0];

mkdirIfNotExists(root);

for (let branch of Object.keys(tree.root)) {
	// build one, two, three
	let branchDir = `./root/${branch}`;
	mkdirIfNotExists(branchDir);
	recursive(tree.root[branch], branch);

	function recursive(list, folder, basePath='') {
			for(let subtree of list) {
				let path = updatePathIfNotExists(basePath || './root', folder)
				if (typeof subtree === 'string') {
					mkdirIfNotExists(`${path}/${subtree}`);
				} else {
					let keys = Object.keys(subtree);
					for (let key of keys) {
						path = updatePathIfNotExists(path, key)
						mkdirIfNotExists(path);
						recursive(subtree[key], key, path)
					}
				}
			}
		}
}

function updatePathIfNotExists(path, folder) {
  if (!path.includes(folder)) {
		return `${path}/${folder}`;
  }
	return path;
}

function mkdirIfNotExists(path) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path);
	}
}
