import { useState, useEffect } from 'react';
import { siteData as initialData } from '../data/siteData';

const useSiteData = () => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('vithaconSiteData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                const mergedData = { ...initialData };
                Object.keys(parsedData).forEach(key => {
                    if (mergedData[key] && typeof mergedData[key] === 'object' && !Array.isArray(mergedData[key])) {
                        mergedData[key] = { ...mergedData[key], ...parsedData[key] };
                    } else {
                        mergedData[key] = parsedData[key];
                    }
                });
                return mergedData;
            } catch (e) {
                console.error("Failed to parse site data from localStorage", e);
            }
        }
        return initialData;
    });

    useEffect(() => {

        // Listen for storage changes (for real-time preview in different tabs)
        const handleStorageChange = (e) => {
            if (e.key === 'vithaconSiteData') {
                if (e.newValue) {
                    const parsed = JSON.parse(e.newValue);
                    const merged = { ...initialData };
                    Object.keys(parsed).forEach(key => {
                        if (merged[key] && typeof merged[key] === 'object' && !Array.isArray(merged[key])) {
                            merged[key] = { ...merged[key], ...parsed[key] };
                        } else {
                            merged[key] = parsed[key];
                        }
                    });
                    setData(merged);
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
