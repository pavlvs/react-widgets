import React, { useState, useEffect } from 'react'

import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                }
            )

            setResults(data.query.search)
        }
        search()
        return () => {}
    }, [term])
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label htmlFor=''>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type='text'
                        className='input'
                    />
                </div>
            </div>
        </div>
    )
}

export default Search
