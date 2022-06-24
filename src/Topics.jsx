import React from 'react'
import Ds from './assets/ds-100.png'
import Ml from './assets/ml-100.png'
import Bt from './assets/bt-100.png'
import './BodyStyles.css'

const Topics = () => {
    return (
        <div id="topics" className="topicsBlock">
           <div className="container">
            <div className="topics-section text-center">
                <h1 className="display-5 text-center">Topics</h1><hr className="ruler"/>
                <div className="row justify-content-center">
                    <div className="col-3 col-md-3 topic-card px-0"><img className="topic-item" src={Ds} alt=""/><br/>Data Science</div>
                    <div className="col-3 col-md-3 topic-card px-0"><img className="topic-item" src={Ml} alt=""/><br/>Machine Learning</div>
                    <div className="col-3 col-md-3 topic-card px-0"><img className="topic-item" src={Bt} alt=""/><br/>Blockchain Technology</div>
                </div>
            </div>
        </div> 
        </div> 
     );
}
 
export default Topics;