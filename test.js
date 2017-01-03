const globby = require('globby');
const path = require('path');

globby(['src/components/**/css']).then(paths => {
    paths.forEach(value => {
        console.log(path.resolve(__dirname, value));
    });
});
