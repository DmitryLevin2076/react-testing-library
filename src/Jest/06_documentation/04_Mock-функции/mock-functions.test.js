

describe('Использование mock функции', () => {
    function forEach(items, callback) {
        for (let index = 0; index < items.length; index++) {
            callback(items[index]);
        }
    }

    it('Проверка вызова mock функции, аргументов и возвращаемого значения', () => {
        const mockCallback = jest.fn(x => 42 + x)
        forEach([0, 1, 5], mockCallback)

        // Мок-функция вызывается трижды
        expect(mockCallback.mock.calls.length).toBe(3)
        // Первый аргумент первого вызова функции был 0
        expect(mockCallback.mock.calls[0][0]).toBe(0)
        // Первый аргумент второго вызова функции был 1
        expect(mockCallback.mock.calls[1][0]).toBe(1)
        // Первый аргумент третьего вызова функции был 5
        expect(mockCallback.mock.calls[2][0]).toBe(5)
        // Возвращаемое значение первого вызова функции было 42
        expect(mockCallback.mock.results[0].value).toBe(42)
        // Возвращаемое значение второго вызова функции было 43
        expect(mockCallback.mock.results[1].value).toBe(43)
        // Возвращаемое значение третьего вызова функции было 47
        expect(mockCallback.mock.results[2].value).toBe(47)
    })

    it('.mock свойства', () => {
        const myMock1 = jest.fn()
        const a = new myMock1()
        console.log(myMock1.mock.instances)
        // > [ <a> ]

        const myMock2 = jest.fn()
        const b = {}
        const bound = myMock2.bind(b)
        bound()
        console.log(myMock2.mock.contexts)
        // > [ <b> ]


        const someMockFunction = jest.fn(() => 'return value')
        someMockFunction('first arg', 'second arg')

        // Функция была вызвана ровно один раз
        expect(someMockFunction.mock.calls.length).toBe(1)
        // Первым аргументом первого вызова функции был 'first arg'
        expect(someMockFunction.mock.calls[0][0]).toBe('first arg')
        // Второй аргумент первого вызова функции был 'second arg'
        expect(someMockFunction.mock.calls[0][1]).toBe('second arg')
        //  Возвращаемое значение первого вызова функции было 'return value'
        expect(someMockFunction.mock.results[0].value).toBe('return value')
        // Функция была вызвана с определенным контекстом `this`: object `element`.

        // Эта функция была создана ровно дважды
        // expect(someMockFunction.mock.instances.length).toBe(2);

        // Объект, возвращаемый первым экземпляром этой функции
        // было свойство `name`, значение которого было установлено в 'test'
        // expect(someMockFunction.mock.instances[0].name).toEqual('test');

        // Первым аргументом последнего вызова функции был 'test'
        // expect(someMockFunction.mock.lastCall[0]).toBe('test');
    })

    it('Значения возвращаемые имитаторами', () => {
        const myMock = jest.fn()
        console.log(myMock()) // > undefined

        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
        console.log(myMock(), myMock(), myMock(), myMock()) // > 10, x, true, true

        const filterTestFn = jest.fn()

        // Сделать так, чтобы макет возвращал `true` для первого вызова,
        // и `false` для второго вызова
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

        const result = [11, 12].filter(num => filterTestFn(num))

        console.log(result) // > [11]
        console.log(filterTestFn.mock.calls[0][0]) // 11
        console.log(filterTestFn.mock.calls[1][0]) // 12
    })
})

