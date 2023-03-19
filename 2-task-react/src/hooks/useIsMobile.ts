import { useEffect, useState } from "react";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handler = () => (window.innerWidth <= 1024 ? setIsMobile(true) : setIsMobile(false));

        window.addEventListener("resize", handler);

        // call it once when the component is mounting
        handler();

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return { isMobile };
}

export default useIsMobile;
