import React from 'react';

import Wallpaper from './wallpaper';

import hulk from '../img/hulk-1.jpg'
import venom1 from '../img/venom-1.jpg'
import venom2 from '../img/venom-2.jpg'


function SampleWallpaper() {
    return (
        <div className="sample-wallpaper">
            <Wallpaper src={venom1} alt="Wallpaper #1" />
            <Wallpaper src={hulk} alt="Wallpaper #2" />
            <Wallpaper src={venom2} alt="Wallpaper #3" />
        </div>
    )
}
export default SampleWallpaper;
