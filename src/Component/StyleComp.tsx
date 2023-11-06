type StyleCompProps = {
    style: React.CSSProperties,
    value: string
}


const StyleComp = ({style, value}: StyleCompProps) => {
    return ( 
        <>
            <div style={style}>{value}</div>
        </>
     );
}
 
export default StyleComp;