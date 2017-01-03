const T = require('terrific');

/**
 * Example3 module implementation.
 *
 * @author Example <example@example.com>
 * @namespace T.Module
 * @class Example3
 * @extends T.Module
 */
T.Module.Example3 = T.createModule({
    start(resolve) {
        console.log(this._ctx);

        resolve();
    }
});
