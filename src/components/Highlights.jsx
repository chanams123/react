import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './Highlight';
import {faBolt, faBookOpen, faTags} from '@fortawesome/free-solid-svg-icons'

const Highlights = () => {
    return (
        <section id="highlights">
                <div className="container">
                    <div className="row">
                        <h2 className="section__title">
                            Why Choose <span className="purple"> Library</span>
                            </h2>
                        <div className="highlight__wrapper">
                            <Highlight 
                            icon={<FontAwesomeIcon icon={faBolt}/>}
                            title="Easy and Quick"
                            para="Get access to the book you purchased instantly"
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon={faBookOpen}/>}
                            title="10,000+ Books"
                            para="Library has all your favorite categories."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon={faTags}/>}
                            title="Affordable Pricing"
                            para="Get your hands on popular books for as little as $10.00. We have a variety of books to choose from."
                        />
                        
                            </div>
                        </div>
                    </div>
            </section>
    );
}

export default Highlights;