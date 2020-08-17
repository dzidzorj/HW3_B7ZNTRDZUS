import React from 'react'

function Wallpaper(props) {
    console.log('wallpaper props',props);
    return (
        <div>
            <article class="wallpaper">

                <img src={props.src} alt={props.alt} className="wallpaper" />
            </article>
        </div>
    );
}
export default Wallpaper;