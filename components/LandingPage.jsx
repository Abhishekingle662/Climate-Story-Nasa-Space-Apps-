// components/LandingPage.js

const LandingPage = () => {
    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', color: 'white', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ color: '#00796b' }}>Climate Story: NASA Space Apps Challenge</h1>
                <p style={{ fontSize: '1.2em' }}>
                    Join us in exploring the future of our planet through innovative technology!
                </p>
            </header>
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#00796b' }}>NASA's Climate Initiatives</h2>
                <p>
                    Learn about the exciting projects NASA is undertaking to combat climate change.
                </p>
                {/* Add images or links to relevant NASA resources */}
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li>
                        <a href="https://climate.nasa.gov/" style={{ color: '#81c784' }}>NASA Climate Change Resources</a>
                    </li>
                    <li>
                        <a href="https://www.nasa.gov/mission_pages/earth/index.html" style={{ color: '#81c784' }}>NASA Earth Science</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2 style={{ color: '#00796b' }}>Get Involved!</h2>
                <form>
                    <input 
                        type="email" 
                        placeholder="Subscribe to updates" 
                        required 
                        style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #00796b' }} 
                    />
                    <button 
                        type="submit" 
                        style={{ padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#00796b', color: 'white', cursor: 'pointer' }}
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default LandingPage;
