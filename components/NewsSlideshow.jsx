import React from 'react';

const NewsSlideshow = () => {
    return (
        <div style={{
            width: '250px',
            border: '1px solid #00796b',
            borderRadius: '5px',
            padding: '10px',
            backgroundColor: '#fff',
            color: '#000',
            position: 'absolute',
            left: '20px',
            top: '100px'
        }}>
            <h3 style={{ color: '#00796b' }}>Latest NASA News</h3>
            <div style={{ marginBottom: '10px' }}>
                <p>Stay updated with the latest news from NASA!</p>
                <a 
                    href="https://www.nasa.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                        color: '#00796b',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

export default NewsSlideshow;
