import React from 'react'
import './pubStyle.css'
import Scopus from './assets/indexers/scopus_tbg.png'
import Sjr from './assets/indexers/sjr.png'
import Compendex from './assets/indexers/comp.png'

const Publication = () => {
    return ( 
        <div className="publication">
            <div className="container about-section pt-3 mb-5">
                {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}
                
                <h1 className="display-5 text-center mb-5">Publication</h1>
                <div className="div-bg-col">
                    <ul style={{fontSize: '1.3em'}}>
                        <li>All the accepted and presented papers will be published in <span className="color-red">IOP </span> Conference Series: Material Science and Engineering (Indexed by WoS)(Submitted)</li>
                        <li>Few selected and extended papers will be published in
                        <ul>
                            <li>IET Edited Book "Disease Analysis and Prediction using Data Science" (indexed by Scopus & WoS)(submitted)</li>
                            <li>Taylor & Francis Edited book "Data science for Disease Prediction"</li>
                            <li>More to be updated soon.</li>
                        </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default Publication;