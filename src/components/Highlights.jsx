import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


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
                            icon={<FontAwesomeIcon icon="bolt"/>}
                            title="Easy and Quick"
                            para="Get access to the book you purchased instantly"
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="book-open"/>}
                            title="10,000+ Books"
                            para="Library has all your favorite categories."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags"/>}
                            title="Affordable Pricing"
                            para="Get your hands on popular books for as little as $10.00. We have a variety of books to choose from."
                        />
                            <div className="highlight">
                                <div className="highlight__img">
                                    <font-awesome-icon icon="bolt" />
                                </div>
                                <h3 className="highlight__subtitle">Easy and Quick</h3>
                                <p className="highlight__para">
                                    Get access to the book you purchased instantlyl
                                
                                </p>
                            </div>
                            <div className="highlight">
                                <div className="highlight__img">
                                    <font-awesome-icon icon="book-open" />
                                </div>
                                <h3 className="highlight__subtitle">10,000+ Books</h3>
                                <p className="highlight__para">
                                    Library has all your favorite categories.
                                </p>
                            </div>
                            <div className="highlight">
                                <div className="highlight__img">
                                    <font-awesome-icon icon="tags" />
                                </div>
                                <h3 className="highlight__subtitle">Affordable Pricing</h3>
                                <p className="highlight__para">
                                    Get your hands on popular books for as low as $10.00. We have a variety of books to choose from.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Highlights;