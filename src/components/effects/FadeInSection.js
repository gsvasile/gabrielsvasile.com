import React from 'react';


const FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    const shouldMove = props.shouldMove ?? true;
    const fadeClass = shouldMove ? 'fade-in-section' : 'fade-in-section-no-move';
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
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

export default FadeInSection;