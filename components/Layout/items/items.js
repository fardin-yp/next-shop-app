import Slider from '../Slider/Slider'
import Footer from '../footer/footer'
import Mid from '../Ads/middle/middle'
import Top from '../Ads/top/top'

const items = ( {posts} ) => {

    
    return (
        <div className="container">
          <Top />
           <div className="holder">      
            <div className="items-title">
              <h1> کنسول های بازی </h1>
              <a href="/console">نمایش همه</a>
            </div>
              <hr />
            <Slider posts={posts} category="console"/> 
            </div>
        <div className="holder">      
            <div className="items-title">
              <h1> کامپیوترهای اسمبل شده</h1>
              <a href="/pc" >نمایش همه</a>
            </div>
              <hr />
              <Slider posts={posts} category="pc"/>    
            </div>
            <Mid />
        <div className="holder">      
            <div className="items-title">
              <h1> لپ تاپ </h1>
              <a href="/laptop">نمایش همه</a>
            </div>
              <hr />
              <Slider posts={posts} category="laptop"/>     
        </div>

        <div className="holder">      
            <div className="items-title">
              <h1>  بازی </h1>
              <a href="/game">نمایش همه</a>
            </div>
              <hr />
            <Slider posts={posts} category="game" />  
        </div>

        <div className="holder">      
            <div className="items-title">
              <h1> لوازم جانبی </h1>
              <a href="/accessories">نمایش همه</a>
            </div> 
              <hr />
             <Slider posts={posts} category="accessories" />     
        </div>
        <Footer />

    </div>
    )
}

export default items
