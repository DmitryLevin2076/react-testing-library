import { useEffect, useState } from "react";
import axios from "axios";
import UlbiTVAppComponent from "./UlbiTVAppComponent/UlbiTVAppComponent";

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

function App() {
    const [search, setSearch] = useState('')
    const [user, setUser] = useState(undefined)
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            const user = await getUser()
            setUser(user)
        }
        loadUser()
    }, [])

    const handleFetch = async () => {
        try {
            const result = await axios.get(`${URL}?query=React`)
            setNews(result.data.hits)
        } catch (error) {
            setError(error)
        }
    }

    const handleChange = ({ target }) => {
        setSearch(target.value)
    }

    return (
        <div>
            <>
                {user && <h2>Logged in as {user.name}</h2>}
                <img src="" alt="search image" />
                <Search value={search} onChange={handleChange}>
                    Search:
                </Search>
                <p>Searches for {search ? search : '...'}</p>
            </>
            <>
                <button type="button" onClick={handleFetch}>
                    Fetch News
                </button>

                {error && <span>Something went wrong ...</span>}

                <ul data-testid='ul-test-id'>
                    {news.map(({ objectID, url, title }) => (
                        <li key={objectID}>
                            <a href={url}>{title}</a>
                        </li>
                    ))}
                </ul>
            </>
            <UlbiTVAppComponent />
        </div>
    );
}

export default App;
