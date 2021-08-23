import Navbar from '../Navbar/Navbar'
import Layout from '../Layout/Layout'
import Ceo from '../../helpers/Ceo/Ceo'


export default function Home({posts}) {

    const ceo = {
        title:"ایران کالا || خرید لوازم سرگرمی و الکترونیک",
        keywords:"IranKala,IRANKALA ,ایرن کالا ,لوازم الکترونیک ,خرید بازی , بازی,خرید , پی اس فایو ,خرید کامپیوتر اسمبل شده ,پی اس فایو,لپتاپ خانگی,لوازم جانبی بازی, ps5 خرید ,خرید pc اسمبل شده",
        description:"خرید لوازم بازی و اکترونیک با پرداخت درب منزل وآنلاین در فروشگاه اینترنتی ایران کالآ با نازل ترین قیمت"
    }

 return (
    <div className="body">
        <Ceo 
         title={ceo.title} 
         keywords={ceo.keywords} 
         description={ceo.description} 
         />
        <Navbar posts={posts} />
        <Layout posts={posts} />
    </div>
    )

}