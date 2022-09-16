// describe('Ложные имена', () => {
//     const myMockFn = jest
//         .fn()
//         .mockReturnValue('default')
//         .mockImplementation(scalar => 42 + scalar)
//         .mockName('add42')
//
//     it('should ', () => {
//
//     })
// })

describe('Custom Matchers', () => {
    const mockFunc = jest.fn().mockName('a mock name')
    const arg1 = '123'
    const arg2 = '321'

    mockFunc(arg1, arg2)

    it('функций сопоставления', () => {
        // Мок-функция была вызвана хотя бы один раз
        expect(mockFunc).toHaveBeenCalled()
        // Мок-функция была вызвана хотя бы один раз с указанными аргументами
        expect(mockFunc).toHaveBeenCalledWith(arg1, arg2)
        // Последний вызов mock-функции был вызван с указанными аргументами
        expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2)
        // Все вызовы и имя мока записываются в виде снапшота
        expect(mockFunc).toMatchSnapshot()
    })

    it('функций сопоставления вручную', () => {
        // Мок-функция была вызвана хотя бы один раз
        expect(mockFunc.mock.calls.length).toBeGreaterThan(0)
        // Мок-функция была вызвана хотя бы один раз с указанными аргументами
        expect(mockFunc.mock.calls).toContainEqual([arg1, arg2])
        // Последний вызов mock-функции был вызван с указанными аргументами
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1, arg2])
        // Первый аргумент последнего вызова фиктивной функции был `42`
        // (обратите внимание, что для этого конкретного утверждения нет помощника сахара)
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe('123')
        // Снапшот проверит, что мок вызывался одинаковое количество раз,
        // в том же порядке, с теми же аргументами. Это также будет утверждать на имя.
        expect(mockFunc.mock.calls).toEqual([[arg1, arg2]])
        expect(mockFunc.getMockName()).toBe('a mock name')
    })
})
