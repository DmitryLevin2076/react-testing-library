const Lodash = require('./sync')
const _ = new Lodash()

describe('Lodash: compact', () => {
    beforeEach(() => {}) // будет запускаться перед каждым тест кейсом
    beforeAll(() => {}) // запустится один раз перед выполнением всех тестов
    afterEach(() => {}) // будет запускаться после каждого теста
    afterAll(() => {}) // запустится один раз после выполнения всех тестов

    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()       // быть определенным
        expect(_.compact).not.toBeUndefined() // нет. быть неопределенным
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        // expect(_.compact(array)).toBe(result)
        /** toBe - примитивы, toEqual - объекты, массивы и тп **/
        expect(_.compact(array)).toEqual(result) // быть равным
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false) // нет. содержать
        expect(_.compact(array)).not.toContain(0)     // нет. содержать
        expect(_.compact(array)).not.toContain('')    // нет. содержать
        expect(_.compact(array)).not.toContain(null)  // нет. содержать
    })
})

describe('Lodash: groupBy', () => {

    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()       // быть определенным
        expect(_.groupBy).not.toBeUndefined() // нет. быть неопределенным
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result) // быть равным
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(array, 'length')).toEqual(result) // быть равным
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array) // быть экземпляром
    })
})
