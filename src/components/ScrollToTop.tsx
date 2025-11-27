import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Extract pathname property (key) from location
    const { pathname } = useLocation();

    // Automatically scroll to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render anything visually
};

export default ScrollToTop;