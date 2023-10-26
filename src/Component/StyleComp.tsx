type StyleCompProps = {
    style: React.CSSProperties
}


const StyleComp = (props: StyleCompProps) => {
    return ( 
        <>
            <div style={props.style}>This is a react typescrpt CSS style component</div>
        </>
     );
}
 
export default StyleComp;