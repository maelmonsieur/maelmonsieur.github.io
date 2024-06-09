import {useRef, useEffect, useState, useMemo} from 'react';

// === utils functions ===

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
}

// === Div Compoment ===
export default function Div(props) {
    const ref1 = useRef(null);
    const isInViewport = useIsInViewport(ref1);

    const classes = props.className ? props.className : ''

    return(
        <div
            ref={ref1}
            {...props}
            className={(isInViewport ? 'show' : 'hide') + ' ' + classes}
        >
        </div>
    );
    
}