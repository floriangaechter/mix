const T = require('terrific');

/**
 * Example2 module implementation.
 *
 * @author Example <example@example.com>
 * @namespace T.Module
 * @class Example2
 * @extends T.Module
 */
T.Module.Example2 = T.createModule({
    start(resolve) {
        console.log(this._ctx);

        resolve();
    }
});
