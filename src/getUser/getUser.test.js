import UserView from './getUser'
import { render, screen, waitFor } from '@testing-library/react';

describe('lalala', () => {
    it('should render user info', async () => {
        render(<UserView id="bob" />)
        expect(await screen.findByText('Bob')).not.toBeNull()
        expect(await screen.findByText('Bob')).toBeInTheDocument()
    })

    it('should render user info', async () => {
        render(<UserView id="bob" />)
        await waitFor(() => {
            expect(screen.getByText('Bob')).not.toBeNull()
        })
    })
})
