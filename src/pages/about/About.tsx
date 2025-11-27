import './About.css';

const About = () => {
    return (
        <div className="about-page">

            {/* 1. HERO SECTION - High Impact Navy Teal [cite: 406] */}
            <section className="about-hero">
                <div className="container">
                    <h1>Redefining<br />Real Estate.</h1>
                    <h2 className="about-hero-text">
                        Building a foundation of trust that empowers sustainable success for everyone — from individual investors to major institutions.
                    </h2>
                </div>
            </section>

            <section className="split-section">
                <div className="container">
                    <div className="split-grid">

                        <div className="split-image">
                            <div className="vertical-crop-image">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                    alt="Modern Office Architecture"
                                />
                            </div>
                        </div>

                        <div className="split-content">
                            <h2>Our Story</h2>
                            <p>
                                We are a value-driven firm that harmonizes two complementary strengths—<strong>Consultancy</strong> and <strong>Brokerage</strong>—to offer a comprehensive service experience. Whether serving private individuals or large institutions, we cover the full spectrum of residential and commercial needs.
                            </p>
                            <p>
                                Our foundation is built on the conviction that the industry requires a higher standard of efficiency and trust. This commitment is symbolized by the Bracket: a visual representation of our promise to frame, focus on, and safeguard the exceptional service we deliver to every client.                            </p>
                            <p>
                                It all starts with the Blueprint. Because a blueprint represents the plan before the build, symbolizing foresight, clarity, and meticulous detail. It maps out the unknown and defines the boundaries—guaranteeing that nothing is left to chance.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. PURPOSE STATEMENT [cite: 535] */}
            <section className="purpose-banner">
                <div className="container">
                    <div className="purpose-quote">
                        "To redefine real estate by guiding confident decisions and building lasting value for clients, developers, and stakeholders."
                    </div>
                </div>
            </section>

            {/* 4. THE TWO ARMS - Deep Dive [cite: 513, 520] */}
            <section className="split-section">
                <div className="container">
                    <div className="split-grid" style={{ direction: 'rtl' }}>
                        {/* RTL direction to flip image/text order for visual variety */}

                        <div className="split-image" style={{ direction: 'ltr' }}>
                            <div className="vertical-crop-image" style={{ borderRadius: '0 300px 0 0' }}>
                                {/* Reversed crop for variety */}
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                    alt="Consultancy Discussion"
                                />
                            </div>
                        </div>

                        <div className="split-content" style={{ direction: 'ltr' }}>
                            <h2>Our Vision</h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: 'var(--brokerage-accent)', marginBottom: '0.5rem' }}>Doors Consultancy</h3>
                                <p>
                                    A growth partner for real estate developers. We provide strategic expertise across concept development, pricing, market positioning, and sales.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--brokerage-accent)', marginBottom: '0.5rem' }}>Doors Brokerage</h3>
                                <p>
                                    Connecting individuals and institutions. We facilitate seamless sales and leasing experiences grounded in transparency and confidence.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 5. TEAM / LEADERSHIP - Corporate Photography [cite: 486] */}
            <section className="team-section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Leadership</h2>
                    <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Reflecting professionalism and trust, our team is dedicated to your success.
                    </p>

                    <div className="team-grid">
                        {/* Team Member 1 */}
                        <div className="team-card">
                            <div className="team-photo-wrapper">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="CEO" />
                            </div>
                            <div className="team-name">Alex Morgan</div>
                            <div className="team-role">Chief Executive Officer</div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="team-card">
                            <div className="team-photo-wrapper" style={{ borderRadius: '0 100px 0 0' }}>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Head of Consultancy" />
                            </div>
                            <div className="team-name">Sarah Jenkins</div>
                            <div className="team-role">Head of Consultancy</div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="team-card">
                            <div className="team-photo-wrapper" style={{ borderRadius: '0 0 0 100px' }}>
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="Head of Brokerage" />
                            </div>
                            <div className="team-name">David Chen</div>
                            <div className="team-role">Head of Brokerage</div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="team-card">
                            <div className="team-photo-wrapper" style={{ borderRadius: '0 0 100px 0' }}>
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Marketing Director" />
                            </div>
                            <div className="team-name">Emily Ross</div>
                            <div className="team-role">Marketing Director</div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default About;