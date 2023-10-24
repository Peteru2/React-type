import React from "react"
type buttonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id:number ) => void
}

const Button = (props: buttonProps) => {
    return ( 
        <button className ="grid px-4 py-2 flex justify-center bg-blue-500 text-white font-bold"onClick={(event)=>props.handleClick(event,1)}>Click</button>
     );
}
 
export default Button;