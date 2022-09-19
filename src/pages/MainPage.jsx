import React, { useEffect, useState } from 'react'

const URL = 'http://hn.algolia.com/api/v1/search'

const getUser = () => Promise.resolve({ id: 1, name: 'Dima' })

const Search = ({ value, onChange, children }) => (
    <div>
        <label htmlFor="search">{children}</label>
        <input
            data-testid="textbox"
            id="search"
            type="text"
            value={value}
            placeholder="search text..."
            onChange={onChange}
            required
        />
    </div>
)

const MainPage = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prev => !prev)

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 1000)
    }, [])

    return (
        <div data-testid="main-page">
            MAIN PAGE
            <h1 data-testid="value-elem">{value}</h1>
            {toggle === true && <div data-testid="toggle-elem">toggle</div>}
            {data ? <div style={{ color: 'red' }}>data</div> : <div>nan</div>}
            <h1>Hello World!</h1>
            <span data-testid="toggle-btn" onClick={onClick}>click me</span>
            <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value..." />
        </div>
    )
}

export default MainPage
