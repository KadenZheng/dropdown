import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        rules: {
            "no-unused-vars": "warning",
            "no-undef": "warning",
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];
