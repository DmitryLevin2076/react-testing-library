import { render, screen, fireEvent, getByRole, findByText } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import axios from "axios";
import { act } from "react-dom/test-utils";

/** userEvent **/

describe('App', () => {
    it('renders App component', async () => {
        render(<App />)
        await screen.findByText(/Logged in as/i)
        expect(screen.queryByText(/Searches for React/)).toBeNull()
        // fireEvent.change(screen.getByRole('textbox'), {
        //     target: { value: 'React' }
        // })
        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(screen.queryByText(/Searches for React/)).toBeInTheDocument()
    });
})

describe('events', () => {
    it('checkbox click', () => {
        const handleChange = jest.fn()
        const { container } = render(
            <input type='checkbox' onChange={handleChange} />
        )
        const checkbox = container.firstChild
        expect(checkbox).not.toBeChecked()
        // fireEvent.click(checkbox)
        userEvent.click(checkbox)
        // userEvent.click(checkbox, { ctrlKey: true, shiftKey: true })
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(checkbox).toBeChecked()
    });

    it('double click', () => {
        const onChange = jest.fn()
        const { container } = render(<input type='checkbox' onChange={onChange} />)
        const checkbox = container.firstChild
        expect(checkbox).not.toBeChecked()
        userEvent.dblClick(checkbox)
        expect(onChange).toHaveBeenCalledTimes(2)
    });

    it('input focus', () => {
        const { getByTestId } = render(
            <input type="text" data-testid="simple-input" />
        )
        const input = getByTestId("simple-input")
        expect(input).not.toHaveFocus()
        input.focus()
        expect(input).toHaveFocus()
    });

    it('tab focus', () => {
        const { getAllByTestId } = render(
            <div>
                <input data-testid="element" type="text" />
                <input data-testid="element" type="radio" />
                <input data-testid="element" type="number" />
            </div>
        )
        const [checkbox, radio, number] = getAllByTestId('element')
        userEvent.tab()
        expect(checkbox).toHaveFocus()
        userEvent.tab()
        expect(radio).toHaveFocus()
        userEvent.tab()
        expect(number).toHaveFocus()
    });

    it('select option', () => {
        const { selectOptions, getByRole, getByText } = render(
            <select>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
            </select>
        )

        userEvent.selectOptions(getByRole('combobox'), '1')
        expect(getByText('A').selected).toBeTruthy()

        userEvent.selectOptions(getByRole('combobox'), '2')
        expect(getByText('B').selected).toBeTruthy()
        expect(getByText('A').selected).toBeFalsy()
    });

    /** fireEvent **/

    it('checkbox click', () => {
        const handleChange = jest.fn()
        const { container } = render(
            <input type="checkbox" onChange={handleChange} />
        )
        const checkbox = container.firstChild
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
    });
})

/** Async test **/

jest.mock('axios')

const hits = [
    {
        objectID: '1',
        title: 'Angular'
    },
    {
        objectID: '2',
        title: 'React'
    }
]

describe('App', () => {
    it('fetches news from an API (resolve)', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }))
        const {getByRole, findAllByRole} = render(<App />)
        userEvent.click(getByRole('button'))
        const items = await findAllByRole('listitem')
        expect(items).toHaveLength(2)
        // Additional
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=React')
    });

    it('дополнительно с помошью act: fetches news from an API (resolve)', async () => {
        const promise = Promise.resolve({ data: { hits } })
        axios.get.mockImplementationOnce(() => promise)
        const {getByRole, getAllByRole} = render(<App />)
        userEvent.click(getByRole('button'))
        await act(() => promise)
        expect(getAllByRole('listitem')).toHaveLength(2)
    });

    it('fetches news from an API (reject)', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
        const {getByRole, findByText, queryByText, findByTestId} = render(<App />)

        expect(queryByText(/Something went wrong/)).not.toBeInTheDocument()
        userEvent.click(getByRole('button'))

        const message = await findByText(/Something went wrong/)
        expect(message).toBeInTheDocument()

        const ul = await findByTestId('ul-test-id')
        expect(ul.firstChild).not.toBeInTheDocument()
    });
})







