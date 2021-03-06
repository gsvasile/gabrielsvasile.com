import React from 'react';

// This code was adapted from a site desicovered while doing some research.
// Source: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
// This method is smoother than my custom scroll event checking.
// ..
// Assumes that there is a predfined CSS class 'fade-in-section-no-move' that will be used to
// fade in if the given class (through props.fadeClass) does not exist.
export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    const fadeClass = props.fadeClass ? props.fadeClass : 'fade-in-section-no-move';
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {

            // Make it so that each entry is only faded in once.
            // The page needs to be refreshed to see the effect again.
            // To go back to always showing the effect on every intersect,
            // change the below to:
            //      entries.forEach(entry => setVisible(entry.isIntersecting));
            entries.forEach(entry => entry.isIntersecting ? setVisible(true) : '');
        });
        const current = domRef.current;
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
    return (
        <div
            className={`${fadeClass} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}