import { useRef, useEffect, useState } from "react";

export function useScroll() {
    const [position, setPosition] = useState(true);
    const lastScroll = useRef<number>(0);
    const threshold = 20;
    const activationOffset = 320;

    const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
        const currentScroll = scrollPosition();

        if (currentScroll < activationOffset) {
            if (currentScroll <= 0) {
                lastScroll.current = 0;
            }
            return;
        }

        const scrollDifference = Math.abs(currentScroll - lastScroll.current);

        if (scrollDifference >= threshold) {
            if (scrollPosition() > lastScroll.current && position) {
                setPosition(false);
            }

            if (scrollPosition() < lastScroll.current && !position) {
                setPosition(true);
            }

            lastScroll.current = scrollPosition();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [position]);

    return { position }
}