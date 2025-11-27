import './Home.css';

function App() {
    return (
        <div className="App">
            <section className="hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1>Transparency,<br />Confidence,<br />and Support.</h1>
                            <p>Redefining real estate by guiding confident decisions and building lasting value for clients, developers, and stakeholders.</p>
                            <br />
                            <a href="#explore" className="btn btn-primary">Explore Our Services</a>
                        </div>
                        <div className="hero-image-wrapper">
                            {/* Inline style for background image */}
                            <div
                                className="hero-image"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="philosophy">
                <div className="container">
                    <div className="bracket-container">
                        <span className="bracket-icon"></span>
                        <h2>It all starts with the Blueprint.</h2>
                        <p>Because a blueprint represents the plan before the build, symbolizing foresight, clarity, and meticulous detail. It maps out the unknown and defines the boundaries—guaranteeing that nothing is left to chance.</p>
                    </div>
                </div>
            </section>

            <section className="entities" id="explore">
                <div className="container">
                    <div className="entities-grid">

                        <div className="entity-card entity-brokerage">
                            <div className="entity-title" style={{ color: 'var(--brokerage-accent)' }}>
                                Consultancy
                            </div>
                            <p>A growth partner for real estate developers. We provide strategic expertise across concept development, pricing, market positioning, and sales.</p>
                            <a href="#consultancy" className="link-arrow" style={{ color: 'var(--brokerage-accent)' }}>Discover Consultancy &rarr;</a>
                        </div>

                        <div className="entity-card entity-brokerage">
                            <div className="entity-title" style={{ color: 'var(--brokerage-accent)' }}>
                                Brokerage
                            </div>
                            <p>Connecting individuals and institutions. We facilitate seamless sales and leasing experiences grounded in transparency and confidence.</p>
                            <a href="#brokerage" className="link-arrow" style={{ color: 'var(--brokerage-accent)' }}>Find Your Property &rarr;</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="values">
                <div className="container">
                    <h2>Our Values</h2>
                    <div className="values-grid">

                        <div className="value-item">
                            <h3>
                                Excellence
                            </h3>
                            <p>Delivering an exceptional client experience defined by expertise and exactitude.</p>
                        </div>

                        <div className="value-item">
                            <h3>
                                Transparency
                            </h3>
                            <p>Bringing clarity to the complex, empowering you to move forward with certainty.</p>
                        </div>

                        <div className="value-item">
                            <h3>
                                Trust
                            </h3>
                            <p>Your dedicated advocate—protecting your interests and keeping every promise.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;