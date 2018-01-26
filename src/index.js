require('better-log/install');

const fs = require('fs');
const path = require('path');

function replaceTemplateUrlWithTemplate(node, basePath) {
	const propertyKey = node.key;
	const propertyValue = node.value;

	if (propertyKey.name !== 'templateUrl') {
		return;
	}

	const templatePath = path.join(basePath, propertyValue.value);

	let templateStr;
	try {
		templateStr = fs.readFileSync(templatePath).toString();
		propertyKey.name = 'template';
		propertyValue.value = templateStr;
	} catch(e) {
		if (e.code === 'ENOENT') {
			console.warn(`File not found: ${e.path}`);
		}
	}
}

module.exports = function() {
	return {
		visitor: {
			ObjectProperty(nodePath, state) {

				// If basePath isn't specified, use the abs. file folder as base path,
				// to have the ability to work with relative templateUrl's
				const basePath = state.opts.basePath || state.file.opts.filename.split('/').slice(0, -1).join('/');

				replaceTemplateUrlWithTemplate(nodePath.node, basePath);
			}
		}
	};
};
