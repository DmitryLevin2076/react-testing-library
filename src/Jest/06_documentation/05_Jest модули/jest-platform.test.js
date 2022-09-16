describe('Jest Platform', () => {
    it('jest-changed-files', () => {
        function getChangedFilesForRoots() {
            return new Promise(resolve => '123')
        }

        // выводит набор измененных файлов с момента последнего коммита в выбранном репозитории
        getChangedFilesForRoots(['./'], {
            lastCommit: true,
        }).then(result => console.log(result.changedFiles));
    })

    it('jest-diff', () => {
        const { diff } = require('jest-diff');

        const a = { a: { b: { c: 5 } } };
        const b = { a: { b: { c: 6 } } };

        const result = diff(a, b);

        // выводит разницу
        console.log(result);
    })

    it('jest-docblock', () => {
        const { parseWithComments } = require('jest-docblock');

        const code = `
        /**
        * Это пример
        *
        * @flow
        */

        console.log('Привет мир!');
        `;

        const parsed = parseWithComments(code);

        // выводит пример с двумя аттрибутами: комментарии и pragma.
        console.log(parsed);
    })

    it('jest-get-type', () => {
        const { getType } = require('jest-get-type');

        const array = [1, 2, 3];
        const nullValue = null;
        const undefinedValue = undefined;

        // выведет 'array'
        console.log(getType(array));
        // выведет 'null'
        console.log(getType(nullValue));
        // выведет 'undefined'
        console.log(getType(undefinedValue));
    })

    it('jest-validate', () => {
        const {validate} = require('jest-validate');

        const configByUser = {
            transform: '<rootDir>/node_modules/my-custom-transform',
        };

        const result = validate(configByUser, {
            comment: ' Документация: http://custom-docs.com',
            exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
        });

        console.log(result);
    })

    it('pretty-format', () => {
        const {format: prettyFormat} = require('pretty-format');

        const val = {object: {}};
        val.circularReference = val;
        val[Symbol('foo')] = 'foo';
        val.map = new Map([['prop', 'value']]);
        val.array = [-0, Infinity, NaN];

        console.log(prettyFormat(val));
    })
})
