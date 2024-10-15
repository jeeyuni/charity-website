import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    // api
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://partners.every.org/v0.2/search/pets?apiKey=pk_live_8483ffb3c4f743b7e505838df7349127")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);



    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>

            {/* testing api output */}
            <div>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
            </div>
            <Footer />
        </div>
    );
}

export default App;
