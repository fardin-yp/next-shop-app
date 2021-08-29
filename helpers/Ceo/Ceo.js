import Head from 'next/head'
import {Fragment} from "react"

const Ceo = ( {title ,keywords ,description} ) => {
    return (
       <Fragment>
            <Head>
                <html lang="fa-IR" />
                <title dir="rtl">{title}</title>
                <meta name="description" content={description}/> 
                <meta name="keywords" content={keywords} />
            </Head>
       </Fragment>
    )
}

export default Ceo
