module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh", ""],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"import/order": [
			2,
			{
				"newlines-between": "always",
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"unknown",
					"object",
					"type",
				],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				pathGroups: [
					{
						pattern: "react*",
						group: "external",
						position: "before",
					},
				],
			},
		],
	},
};
