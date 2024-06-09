import { useLenis } from '@studio-freight/react-lenis'

export default function Go(props) {
    // Using the useLenis hook to get a LenisInstance
    const lenisInstance = useLenis();

    // Function for smooth scrolling
    const handleRedirect = (id) => {

        const targetElement = document.getElementById(id);

        if (targetElement) {
            const scrollToOptions = {
            // Customize scroll options if needed
            offset: 0,
            lerp: 0.1,
            duration: 1.5,
            immediate: false,
            lock: false,
            force: false,
            };

            lenisInstance.scrollTo(targetElement, scrollToOptions);
        }
    }

    return(<button onClick={() => handleRedirect(props.to)} {...props}>{props.children}</button>)

}