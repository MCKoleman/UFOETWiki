/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */

const config = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	quoteProps: "consistent",
	semi: false,
	useTabs: true,
	tailwindFunctions: ["cn", "cva"],
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^types$",
		"^@/env(.*)$",
		"^@/lib/types/(.*)$",
		"^@/lib/config/(.*)$",
		"^@/lib/utils/(.*)$",
		"^@/lib/hooks/(.*)$",
		"^@/providers/(.*)$",
		"^@/components/(.*)$",
		"^@/stores/(.*)$",
		"^@/app/(.*)$",
		"",
		"^[./]",
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss", // MUST come last
	],
}

export default config
