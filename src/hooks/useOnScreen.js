import { useEffect, useState } from "react";

const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);
    console.log(visible)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);
        if (ref)
            observer.observe(ref)
        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        }
    }, [ref, options])
    return [setRef, visible]
}

export default useOnScreen;