import Users from './src/users'
import axios from 'axios'

jest.mock('axios')

test('should fetch users', () => {
    const users = [{ name: 'Bob' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)

    // или вы можете использовать следующее в зависимости от вашего варианта использования:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(data => expect(data).toEqual(users))
})
