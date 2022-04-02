import { useEffect } from "react";

const BoxIcon = ref => {
    useEffect(() => {

        const link = document.createElement('link');
        link.href = ref;
        link.rel = 'stylesheet';

        document.body.appendChild(link);

        return () => {
            document.body.removeChild(link);
        }
    }, [ref]);
}

export default BoxIcon;