const path = require("path");

module.exports = function DashboardModule(moduleOptions) {
    const options = {
        ...this.options.dashboard,
        ...moduleOptions,
    };

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "dashboard.plugin.js",
        options,
    });

    // Auto import components
    this.nuxt.hook("components:dirs", (dirs) => {
        dirs.push({
            path: path.resolve(__dirname, "components"),
            prefix: "Dashboard",
        });
    });
};
