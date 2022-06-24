import React from 'react';
import './CardStyles.css'
import './flaticon.svg'
import Ml from './assets/Topic Assets/ml.svg'
import Ds from './assets/Topic Assets/ds.svg'
import Bc from './assets/Topic Assets/bc.svg'
import { HashLink as Link } from 'react-router-hash-link';

const Card = () => {
    return ( 
        <div className="card-wrapper">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <h1 className="display-5 text-center">Topics</h1><hr className="ruler" style={{ width: "50px" }}/>
            <div class="card-content">
                <div class="card">
                    <Link to="/topics#dataScience">
                        <div class="icon"><img className="svg-icon" src={Ds} height="50px" width="50px" alt=""/></div>
                        <p class="title">Data Science</p>
                        <p class="text">Learn More about Data Science</p>   
                    </Link> 
                </div>

                <div class="card">
                    <Link to="/topics#machineLearning">
                        <div class="icon"><img className="svg-icon" src={Ml} height="50px" width="50px" alt=""/></div>
                        <p class="title">Machine Learning</p>
                        <p class="text">Learn More about Machine Learning</p> 
                    </Link>   
                </div>

                <div class="card">  
                    <Link to="/topics#blockchain">
                        <div class="icon"><img className="svg-icon" src={Bc} height="50px" width="50px" alt=""/></div>
                        <p class="title">Blockchain Technology</p>
                        <p class="text">Learn More about Blockchain Technology</p>    
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Card;