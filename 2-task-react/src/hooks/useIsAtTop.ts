import { useEffect, useState } from "react";

function useIsAtTop(mainElement: React.RefObject<HTMLElement>) {
    const [isAtTheTop, setIsAtTheTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (mainElement.current) setIsAtTheTop(mainElement.current.getBoundingClientRect().top === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { isAtTheTop };
}

export default useIsAtTop;
