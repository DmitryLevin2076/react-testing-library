import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UlbiTVAppComponent from "./UlbiTVAppComponent";
import userEvent from "@testing-library/user-event";

describe('TEST APP FROM Ulbi TV', () => {
    it('renders learn react link', () => {
        render(<UlbiTVAppComponent />)
        const helloWorld = screen.getByText(/hello world/i)
        const btn = screen.getByTestId('toggle-btn')
        const input = screen.getByPlaceholderText(/input value/i)
        expect(helloWorld).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
        expect(input).toBeInTheDocument()
        // Snapshot
        expect(input).toMatchSnapshot()
    });

    it('Пример с queryBy', () => {
        render(<UlbiTVAppComponent />)
        const helloWorldElem = screen.queryByText(/hello1/i)
        expect(helloWorldElem).toBeNull()
    });

    it('Пример с waitFor', async () => {
        render(<UlbiTVAppComponent />)

        const data = await waitFor(() => screen.getByText(/data/i)
            , {
                timeout: 2000
            })

        expect(data).toBeInTheDocument()
        expect(data).toHaveStyle({ color: 'red' })

        // await waitFor(() => {
        //     expect(screen.getByText(/data/i)).toBeInTheDocument()
        //     expect(screen.getByText(/data/i)).toHaveStyle({ color: 'red' })
        // }, {
        //     timeout: 2000
        // })
    });

    it('Пример с findBy', async () => {
        render(<UlbiTVAppComponent />)

        const dataElem = await screen.findByText(/data/i, {}, { timeout: 2000 })
        expect(dataElem).toBeInTheDocument()
        expect(dataElem).toHaveStyle({ color: 'red' })
    });

    it('CLICK EVENT', () => {
        render(<UlbiTVAppComponent />)
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    })

    it('fireEvent', () => {
        render(<UlbiTVAppComponent />)
        const input = screen.getByPlaceholderText(/input value/i)
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        // Искуственное событие
        fireEvent.input(input, {
            target: { value: '123' }
        })
        expect(screen.queryByTestId('value-elem')).toContainHTML('123')
    })

    it('useEvent', () => {
        render(<UlbiTVAppComponent />)
        const input = screen.getByPlaceholderText(/input value/i)
        // Событие пользователя
        userEvent.type(input, 'Test text')
        expect(screen.queryByTestId('value-elem')).toHaveTextContent(/^Test text$/)
    })
})
