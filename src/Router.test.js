import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

describe('ROUTER TEST', () => {
    it('should route to main page', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    it('should route to about page', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    it('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/sdfsdf']}>
                <App />
            </MemoryRouter>
        )

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
})
