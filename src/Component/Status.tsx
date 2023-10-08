type statusProps = {
    // status: string
    status: "Loading" | "Success" | "Error"
}

const Status = (props: statusProps) => {
    let loginMessage

    if (props.status === "Loading"){
        loginMessage = "Laoding..."
    }
    else if(props.status === "Success"){
        loginMessage = "User logged is successfully"
    }
    else if(props.status === "Error"){
        loginMessage = "Error logging in user"
    }
    return ( 
        <>
            Status - {loginMessage}
        </>
     );
}
 
export default Status;