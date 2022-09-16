const { sum, nativeNull } = require('./intro')

describe('Sum function:', () => {

    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)    // быть
        expect(sum(1, 3)).toEqual(4) // быть равным
        // toBe toEqual - в данном случае одно и то же
    })

    test('should return value correctly comparing to other values', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)        // быть больше, чем
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5) // быть больше или равно
        expect(sum(2, 3)).toBeLessThan(10)          // быть меньше, чем
        expect(sum(2, 3)).toBeLessThanOrEqual(5)    // быть меньше или равно
    })

    test('should sum 2 float values correctly', () => {
        // Решение проблем с flout значениями
        // expect(sum(0.1, 0.2)).toBe(0.3)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // быть рядом
    })
})

describe('Native null function:', () => {

    test('should return false value null', () => {
        expect(nativeNull()).toBe(null) // быть
        expect(nativeNull()).toBeNull()          // быть null
        expect(nativeNull()).toBeFalsy()         // быть boolean false // undefined, null, 0, "", ...
        expect(nativeNull()).toBeDefined()       // быть defined
        expect(nativeNull()).not.toBeTruthy()    // нет. быть boolean true
        expect(nativeNull()).not.toBeUndefined() // нет. быть undefined
    })
})
