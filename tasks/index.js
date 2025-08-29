const path = require("path");

module.exports = function TaskModule(moduleOptions) {
    const options = {
        ...this.options.task,
        ...moduleOptions,
    };

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "tasks.plugin.js",
        options,
    });

    // Auto import components
    this.nuxt.hook("components:dirs", (dirs) => {
        dirs.push({
            path: path.resolve(__dirname, "components"),
            prefix: "Tasks",
        });
    });
};
