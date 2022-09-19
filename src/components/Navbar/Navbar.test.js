import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe('USERS TEST', () => {
    it('should go to about page', () => {
        render(renderWithRouter(<Navbar />))
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    it('should go to users page', () => {
        render(renderWithRouter(<Navbar />))
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

    it('should go to main page', () => {
        render(renderWithRouter(<Navbar />))
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
})
