import Page from '../../components/page/page'
import {items} from '../../helpers/items'

export function getStaticProps () {
 
  return {
    props:{
      items:items
    }
  }
}


export default function home({items}) {


  return (
  <Page posts={items} category="accessories" />
    
  )
}