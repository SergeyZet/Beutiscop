module.exports = {
	root: true,
	modules: {
		"bem-tools": {
			plugins: {
				create: {
					techs: ["pug", "less", "js"],
					levels: {
						"src/blocks/modules": {
							default: true
						}
					}
				}
			}
		}
	}
};