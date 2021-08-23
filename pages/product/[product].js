import FullPost from '../../components/post/fullPost'
import {items} from '../../helpers/items'
import Ceo from '../../helpers/Ceo/Ceo'

export function getStaticProps (context) {
    const params = context.params.product

    const product = [...items].filter(re => {
        return re.id === params
    })

 
  return {
    props:{
      items:product
    }
  }
}
export async function getStaticPaths (){
  
      return {
        fallback:false,
        paths:items.map((res) => ({
          params:{product:res.id}
        })),
      }
      
    } 


export default function home({items}) {

  const name = items.map(res => {
    return res.name
  })
  
  return <>       
  <Ceo 
  title={`${name}`} 
  keywords={`key`} 
  description={`yhgfu`} 
  /><FullPost posts={items} />
  </>
}