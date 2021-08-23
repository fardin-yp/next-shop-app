import {items} from '../../helpers/items'
import SearchC from '../../components/search/search'
import { useRouter } from 'next/router'
import Ceo from '../../helpers/Ceo/Ceo'

const Search = () => {

    const route = useRouter()
    const path = route.query.search;
    const searchFilter = items.filter(op => op.tags && op.tags.toLowerCase().includes(path && path.toLowerCase()))

    return (

        <>
        <Ceo 
         title={` نتیجه جستو برای ${path}`} 
         keywords={`key`} 
         description={`yhgfu`} 
         />
        <SearchC posts={searchFilter && searchFilter || false} />
        </>

    )



}

export default Search
