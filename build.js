//Load the library and specify options
const replace = require('replace-in-file');

const options = {
    files: './java-control-plane-master/api/src/main/**/*.proto',
    from: [
        // inline custom options
        /\[\s*\(.+\)(.*,[\n])*.*\n*\s*\]/gm,
        // standalone custom options
        // /option\s+\(.+\).*;|\[\(validate\.rules\)[^]]+\]/
    ],
    to: '',
};

replace(options, (error, changes) => {
    if (error) {
        return console.error('Error occurred:', error);
    }
    console.log('Modified files:', changes.join(', '));
});
