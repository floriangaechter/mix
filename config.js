const T = require('terrific');

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context("./src/js", true, /^\.\/.*\.js/));
requireAll(require.context("./src/components", true, /^\.\/.*\.js/));

let application = new T.Application();
application.registerModules();
application.start();
