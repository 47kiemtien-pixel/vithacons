import { useState, useEffect } from 'react';
import { siteData as initialData } from '../data/siteData';

const useSiteData = () => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        // Load data from localStorage if exists (for admin previews)
        const savedData = localStorage.getItem('vithaconSiteData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                // Basic merge logic to ensure new fields in initialData aren't lost
                setData({ ...initialData, ...parsedData });
            } catch (e) {
                console.error("Failed to parse site data from localStorage", e);
            }
        }

        // Listen for storage changes (for real-time preview in different tabs)
        const handleStorageChange = (e) => {
            if (e.key === 'vithaconSiteData') {
                if (e.newValue) {
                    setData({ ...initialData, ...JSON.parse(e.newValue) });
                } else {
                    setData(initialData);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const updateData = (newData) => {
        setData(newData);
        localStorage.setItem('vithaconSiteData', JSON.stringify(newData));
    };

    const resetData = () => {
        setData(initialData);
        localStorage.removeItem('vithaconSiteData');
    };

    return { data, updateData, resetData };
};

export default useSiteData;
