import React from 'react'

import './Footer.scss';

export default function Footer() {
    const [ opacity, setOpacity ] = React.useState(0);

    const checkScrollEvent = (event) => {
        // console.log(event);
        let position = window.pageYOffset/window.innerHeight;
        
        if (position >= 3.5) {
            setOpacity(1);
        } else {
            setOpacity(0)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollEvent);

        return (() => {
            window.removeEventListener("scroll", checkScrollEvent);
        })
    }, [])


    return (
        <div class = "footer" style = {{opacity}}>
            <ul>
                <li><a href = "#">Tesla C 2021</a></li>
                <li><a href = "#">Privacy & Legal</a></li>
                <li><a href = "#">Recall Info</a></li>
                <li><a href = "#">Contact</a></li>
                <li><a href = "#">Careers</a></li>
                <li><a href = "#">Get Newsletter</a></li>
                <li><a href = "#">News</a></li>
                <li><a href = "#">Locations</a></li>
            </ul>
        </div>
    )
}
