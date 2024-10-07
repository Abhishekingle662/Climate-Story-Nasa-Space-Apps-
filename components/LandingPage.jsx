// components/LandingPage.jsx

'use client'; // Add this line to make this a Client Component

import NewsSlideshow from './NewsSlideshow'; // Import the NewsSlideshow component
import { useState } from 'react'; // Import useState for managing state

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        const query = encodeURIComponent(searchTerm); // Encode the search term for the URL
        window.open(`https://www.google.com/search?q=${query}`, '_blank'); // Open Google search in a new tab
        setSearchTerm(''); // Clear the search input
    };

    return (
        <div style={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', color: 'white', fontFamily: 'Arial, sans-serif' }}>
            {/* News Slideshow on the left */}
            <div style={{ marginRight: '20px' }}>
                <NewsSlideshow />
            </div>

            {/* Main content area */}
            <div style={{ flex: 1 }}>
                <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1 style={{ color: '#00796b' }}>Climate Story: NASA Space Apps Challenge</h1>
                    <p style={{ fontSize: '1.2em' }}>
                        Explore Planet's Future with Technology!
                    </p>
                </header>
                <section style={{ marginTop: '40px' }}>
                    <h2 style={{ color: '#00796b', textAlign: 'center' }}>For Resources!</h2>
                    <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            required 
                            value={searchTerm} // Bind the input value to searchTerm
                            onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
                            style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #00796b', flex: '1' }} 
                        />
                        <button 
                            type="submit" 
                            style={{ padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#00796b', color: 'white', cursor: 'pointer' }}
                        >
                            Search
                        </button>
                    </form>
                </section>
                <section style={{ marginBottom: '40px', marginTop: '20px' }}>
                    <h2 style={{ color: '#00796b' }}>NASA's Climate Initiatives</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Learn about the exciting projects NASA is undertaking to combat climate change.
                    </p>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        <li style={{ marginBottom: '10px' }}>
                            <a 
                                href="https://climate.nasa.gov/" 
                                style={{ color: '#81c784', textDecoration: 'underline' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                NASA Climate Change Resources
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://science.nasa.gov/earth/" 
                                style={{ color: '#81c784', textDecoration: 'underline' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Earth NASA Science
                            </a>
                        </li>
                    </ul>
                </section>
                <section style={{ marginBottom: '40px' }}>
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
        </div>
    );
};

export default LandingPage;
