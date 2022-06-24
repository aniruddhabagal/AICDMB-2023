import React from 'react'
import './pubStyle.css'
import Scopus from './assets/indexers/scopus_tbg.png'
import Sjr from './assets/indexers/sjr.png'
import Compendex from './assets/indexers/comp.png'

const Guidelines = () => {
    return ( 
        <div className="publication">
            <div className="container about-section pt-3 mb-5">
                {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}
                <div className="div-bg-col">
                    <p className="display-3 text-center">Author Guidelines</p>
                    <hr className="ruler"/>
                    <p className="text-custom text-center">Details will be updated soon.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Guidelines;