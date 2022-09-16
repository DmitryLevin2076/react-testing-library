describe('Повтор настройки', () => {
    let cities

    const initializeCityDatabase = () => cities = ['Vienna', 'San Juan']
    const clearCityDatabase = () => cities = []
    const isCity = (city) => cities.indexOf(city) !== -1;

    beforeEach(() => {
        initializeCityDatabase()
    })

    afterEach(() => {
        clearCityDatabase()
    })

    it('city database has Vienna', () => {
        expect(isCity('Vienna')).toBeTruthy()
    })

    it('city database has San Juan', () => {
        expect(isCity('San Juan')).toBeTruthy()
    })
})

describe('Определение контекста', () => {

})
