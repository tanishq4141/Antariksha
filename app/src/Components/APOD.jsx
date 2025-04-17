import React, { useState, useEffect } from 'react';
import { nasaService } from '../services/nasaService';

function APOD() {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const data = await nasaService.getAPOD();
                setApodData(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch APOD data');
                setLoading(false);
            }
        };

        fetchAPOD();
    }, []);

    if (loading) return <div className="text-center text-white">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (!apodData) return null;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Astronomy Picture of the Day</h1>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    {apodData.media_type === 'image' ? (
                        <img 
                            src={apodData.url} 
                            alt={apodData.title}
                            className="w-full h-auto"
                        />
                    ) : (
                        <iframe
                            src={apodData.url}
                            title={apodData.title}
                            className="w-full h-[500px]"
                            frameBorder="0"
                            allowFullScreen
                        />
                    )}
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">{apodData.title}</h2>
                        <p className="text-gray-300">{apodData.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default APOD; 