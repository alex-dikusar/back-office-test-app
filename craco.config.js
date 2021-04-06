const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@layout-header-background": "#4a9fe0",
                },
            },
        },
    ],
};