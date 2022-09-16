const MyPromise = require('./promise')

describe('MyPromise:', () => {
    let promise,
        executorSpy

    const successResult = 42
    const errorResult = 'I am error'

    beforeEach(() => {
        executorSpy = jest.fn(resolve => setTimeout(() => resolve(successResult), 150))
        promise = new MyPromise(executorSpy)
    })

    test('should exists and to be typeof function', () => {
        expect(MyPromise).toBeDefined() // быть определенным
        expect(typeof MyPromise).toBe('function') // быть
    })

    test('instance should have methods: then, catch, finally', () => {
        expect(promise.then).toBeDefined()    // быть определенным
        expect(promise.catch).toBeDefined()   // быть определенным
        expect(promise.finally).toBeDefined() // быть определенным
    })

    test('should call executor function', () => {
        expect(executorSpy).toHaveBeenCalled() // быть призванным
    })

    test('should get data in then block and chain them', async () => {
        const result = await promise.then(num => num).then(num => num * 2)
        expect(result).toBe(successResult * 2) // быть
        expect(result).toBe(84) // 42 * 2      // быть
    })

    test('should catch error', () => {
        const errorExecutor = (_, reject) => setTimeout(() => reject(errorResult), 150)
        const errorPromise = new MyPromise(errorExecutor)

        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult) // быть
                resolve()
            })
        })
    })

    test('should call finally method', async () => {
        const finallySpy = jest.fn(() => {})
        await promise.finally(finallySpy)

        expect(finallySpy).toHaveBeenCalled() // быть призванным
    })
})
