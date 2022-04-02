import  { useEffect } from "react";

const UseScript = url => {
    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = url;
        // script.async = true; // async recebe true se for uma web URI
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default UseScript;