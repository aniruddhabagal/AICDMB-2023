import React from 'react'
import Footer from './Footer'
import './CardStyles.css'
import Ml from './assets/Topic Assets/ml.svg'
import Ds from './assets/Topic Assets/ds.svg'
import Bc from './assets/Topic Assets/bc.svg'

const TopicsPage = () => {
    return ( 
        <div className="mb-auto">
            <div className="container about-section pt-3">
                <h1 className="display-5 text-center">Topics</h1><hr className="ruler" style={{ width: "50px" }}/>
                <div id="dataScience" className="row mt-5 topic-page-block">
                    <div className="col-12 col-lg-6 text-center">
                        <img src={Ds} className="svg-icon" alt="" height="70%" width="70%"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Data Science</h4>
                        <ul>
                            <li>Big Data Challenges</li>
                            <li>Deep Learning for Big Data</li>
                            <li>Data Analytics</li>
                            <li>High Performance Computing</li>
                            <li>Data Mining</li>
                            <li>Database privacy and security</li>
                            <li>Data Vizualization and Data Exploration</li>
                        </ul>
                    </div>
                </div>
                <hr className="ruler"/>
                <div id="machineLearning" className="row mt-5 topic-page-block">
                    <div className="col-12 col-lg-6 text-center">
                        <img src={Ml} className="svg-icon" alt="" height="70%" width="70%"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Machine Learning</h4>
                        <ul>
                            <li>Deep Learning</li>
                            <li>Neural Networks</li>
                            <li>Computational Intelligence</li>
                            <li>Evolutionary and Swarm Intelligence</li>
                            <li>Natural Language Processing</li>
                            <li>Software Engineering</li>
                            <li>Speech Processing</li>
                            <li>Automated Reasoning and Logic Programming</li>
                        </ul>
                    </div>
                </div>
                <hr className="ruler"/>
                <div id="blockchain" className="row mt-5 topic-page-block">
                    <div className="col-12 col-lg-6 text-center">
                        <img src={Bc} className="svg-icon" alt="" height="70%" width="70%"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Blockchain Technology</h4>
                        <ul>
                            <li>Blockchain Security</li>
                            <li>Blockchain Architecture</li>
                            <li>Blockchain Smart Contracts</li>
                            <li>Blockchain use-case: Insurance</li>
                            <li>Blockchain use-case: Payments</li>
                            <li>Blockchain as a Service (BAAS)</li>
                            <li>Blockchain use-case: Cryptocurrencies</li>
                            <li>The Blockchain Revolution in Banking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TopicsPage