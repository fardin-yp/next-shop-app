import Home from '../components/Home/Home'
import {items} from '../helpers/items'


export function getStaticProps () {
 
  return {
    props:{
      items:items,
    }
  }
}


export default function home( {items} ) {
  
  return <Home posts={items} />
}
