const getData = require('./getData')
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                    address: [Object],
                    phone: '1-770-736-8031 x56442',
                    website: 'hildegard.org',
                    company: [Object]
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    email: 'Shanna@melissa.tv',
                    address: [Object],
                    phone: '010-692-6593 x09125',
                    website: 'anastasia.net',
                    company: [Object]
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    email: 'Nathan@yesenia.net',
                    address: [Object],
                    phone: '1-463-123-4447',
                    website: 'ramiro.info',
                    company: [Object]
                }
            ]
        }
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('Корректное значение', async () => {
        axios.get.mockReturnValue(response)
        const data = await getData()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
})
