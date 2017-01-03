const T = require('terrific');

/**
 * Example module implementation.
 *
 * @author Example <example@example.com>
 * @namespace T.Module
 * @class Example
 * @extends T.Module
 */
T.Module.Example = T.createModule({
    start(resolve) {
        console.log(this._ctx);

        resolve();
    }
});
