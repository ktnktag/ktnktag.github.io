import { useRef, useEffect, useState } from "react";

export function useShow() {
    const [position, setPosition] = useState(false);
    const lastScroll = useRef<number>(0);

    const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
        if (scrollPosition() > lastScroll.current && position) {
            setPosition(false);
        }
        
        if (scrollPosition() < lastScroll.current && !position) {
            setPosition(true);
        }

        lastScroll.current = scrollPosition();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [position]);

    return { position }
}