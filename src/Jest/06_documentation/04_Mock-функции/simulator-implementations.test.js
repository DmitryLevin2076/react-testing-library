describe('фиктивная реализация', () => {
    jest.mock('./src/foo') // это происходит автоматически при автомокинге
    const foo = require('./src/foo')

    // fo is a mock function
    foo.mockImplementation(() => 42)

    it('should ', () => {
        expect(foo()).toBe(42)
        expect(foo).toHaveBeenCalled()
    })
})

describe('фиктивная реализация один раз', () => {
    const myMockFn = jest
        .fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false))

    myMockFn((err, val) => console.log(err, val, 111))
    myMockFn((err, val) => console.log(err, val, 222))
})

describe('фиктивная реализация по умолчанию', () => {
    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call')

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())
    // > 'first call', 'second call', 'default', 'default'
})

describe('mockReturnThis', () => {
    const myObj = {
        myMethod: jest.fn().mockReturnThis()
    }

    // такой же как

    const otherObj = {
        myMethod: jest.fn(() => {
            return this
        })
    }
})
