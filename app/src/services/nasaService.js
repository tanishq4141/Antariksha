import { NASA_API_KEY, NASA_APIS } from './nasaConfig';

export const nasaService = {
    // Get Astronomy Picture of the Day
    getAPOD: async () => {
        try {
            const response = await fetch(`${NASA_APIS.APOD}?api_key=${NASA_API_KEY}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching APOD:', error);
            throw error;
        }
    },

    // Get Near Earth Objects
    getNEO: async (startDate, endDate) => {
        try {
            const response = await fetch(
                `${NASA_APIS.NEO}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching NEO:', error);
            throw error;
        }
    },

    // Get Mars Rover Photos
    getMarsRoverPhotos: async (rover, sol) => {
        try {
            const response = await fetch(
                `${NASA_APIS.MARS_ROVER}/${rover}/photos?sol=${sol}&api_key=${NASA_API_KEY}`
            );
            return await response.json();
        } catch (error) {
            console.error('Error fetching Mars Rover Photos:', error);
            throw error;
        }
    },

    // Get NASA Image and Video Library
    searchNASAImages: async (query) => {
        try {
            const response = await fetch(
                `${NASA_APIS.NASA_IMAGE}?q=${query}&api_key=${NASA_API_KEY}`
            );
            return await response.json();
        } catch (error) {
            console.error('Error searching NASA Images:', error);
            throw error;
        }
    },

    // Get Mars Weather (InSight)
    getMarsWeather: async () => {
        try {
            const response = await fetch(`${NASA_APIS.INSIGHT}?api_key=${NASA_API_KEY}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching Mars Weather:', error);
            throw error;
        }
    }
}; 