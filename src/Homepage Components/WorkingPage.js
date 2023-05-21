import React from 'react';
import './WorkingPage.css';
import { Link } from 'react-router-dom';

// import images
import workim from '../Assets/workingimg.jpg';


const WorkingPage = () => {
    return (
        <>
            <section className="working-page-sec">
                <div className="working-page-wrap">
                    <img src={workim} alt="workingimg" />
                    <div className="text-working-page">
                        <h5 className="working-heading">WORKING WITH US</h5>
                        <h2 className="extensive-part">EXTENSIVE COMPANY NETWORK</h2>
                        <p className="extensive-para">Constico company is represented by multiple branches all around the world. We implement different projects, innovative technologies and use an individual approach for every client!</p>
                        <div className="extensive-btn">
                            <Link href="#">Request A Quote</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='blank-space'>

            </div> */}
        </>
    )
}

export default WorkingPage;