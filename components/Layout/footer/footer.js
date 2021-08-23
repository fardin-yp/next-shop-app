import React from 'react'

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <ul>
                    <li><a href="/console">کنسول بازی</a></li>
                    <li><a href="/pc">کامپیوتر اسمبل شده</a></li>
                    <li><a href="/laptop"> لپ تاپ</a></li>
                    <li><a href="game"> بازی</a></li>
                    <li><a href="/accessories"> لوازم جانبی</a></li>      
                </ul>
            </div>
            <hr />
            <div className="footer-bot">
                <h1>IRANKala</h1>
                <p>تمامی حقوق وبسایت محفوظ است.</p>
            </div>
        </div>
    )
}

export default footer
