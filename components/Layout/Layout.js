import Items from './items/items'
import MobileMenu from '../Mobile/menu'

export default function Layout (props) {
    return (
        <div className="Layout">
          <Items posts={props.posts} />
          <MobileMenu />
        </div>
    )
}