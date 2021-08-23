import {useState} from 'react'

const Search = ( {items ,search} ) => {
    const [notFound ,setNotFound] = useState(false)
    return (
        <div className="search-component">
            {items && items.filter(res => {
                res.tags === search || setNotFound(true)
            }).map(posts => {
                <div>
                    
                </div>
            })}
        </div>
    )
}

export default Search
