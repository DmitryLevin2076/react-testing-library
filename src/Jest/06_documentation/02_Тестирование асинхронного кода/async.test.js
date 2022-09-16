const fetchData = require('./async')

describe('Промисы', () => {
    it('the data is peanut butter', () => {
        return fetchData(true).then(data => {
            expect(data).toBe('peanut butter')
        })
    })
})

describe('Async/Await', () => {
    it('the data is peanut butter', async () => {
        const data = await fetchData(true)
        expect(data).toBe('peanut butter')
    })

    it('the fetch fails with an error', async () => {
        expect.assertions(1)
        try {
            await fetchData(false)
        } catch (e) {
            expect(e).toMatch('error')
        }
    })

    it('the data is peanut butter', async () => {
        await expect(fetchData(true)).resolves.toBe('peanut butter')
    })

    it('fetch вернет ошибку', async () => {
        await expect(fetchData(false)).rejects.toMatch('error')
    })
})

/** Убедитесь, что вы возвращаете промис или ожидаете его завершения.
 * Если вы пропустите выражение return/await, ваш тест будет завершён до того, как
 * промис, полученный от fetchData разрешит(resolve) или отклонит(reject) его. **/

describe('Обратные вызовы', () => {
    it('the data is peanut butter', done => {
        function callback(error, data) {
            if (error) {
                done(error)
                return
            }
            try {
                expect(data).toBe('peanut butter');
                done()
            } catch (error) {
                done(error)
            }
        }

        fetchData(callback)
    })
})

describe('.resolves / .rejects', () => {
    it('the data is peanut butter', () => {
        return expect(fetchData(true)).resolves.toBe('peanut butter')
    })

    it('the fetch fails with an error', () => {
        return expect(fetchData(false)).rejects.toMatch('error')
    })
})
