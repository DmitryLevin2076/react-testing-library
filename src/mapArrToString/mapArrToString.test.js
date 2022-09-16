const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
    it('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })

    it('Разные значения', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'sdfafs'])).toEqual(['1', '2', '3'])
    })

    it('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([])
    })

    it('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3])
    })
})
