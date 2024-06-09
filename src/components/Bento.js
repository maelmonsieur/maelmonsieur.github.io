import Div from "./Div";


// === Div Compoment ===
export default function Bento(props) {

    const classes = props.className ? props.className : ''
    
    if (props.img) {

        const imgStyle = {
            background: `url(${props.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return(
            <Div
                {...props}
                className={"bento " + classes}
                style={{...imgStyle,...props.style}}
            >
            </Div>
        )

    } else {
        
        return(
            <Div
                {...props}
                className={"bento " + classes}
            >
                {props.children}
            </Div>
        );

    }
}