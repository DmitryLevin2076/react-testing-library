const validateValue = require('./validateValue')

describe('validateValue', () => {
    it('Корректное значения', () => {
        expect(validateValue(50)).toBe(true)
    })

    it('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })

    it('Больше корректного', () => {
        expect(validateValue(101)).toBe(false)
    })

    it('Пограничное занчение снизу', () => {
        expect(validateValue(0)).toBe(true)
    })

    it('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true)
    })
})
