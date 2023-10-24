

type DGreetProps = {
    name: string,
    isLoggedIn?: boolean
}


const DGreet = (props:DGreetProps) => {
   
    return ( 
        <>
        <section>
            { props.isLoggedIn ? (
            <div className="bg-gray-400 text-2xl font-bold text-white mx-4 py-4">Welcome {props.name}, to your first React and TypeScript Project</div>
            ) : <div className="bg-gray-400 text-2xl font-bold text-white mx-4 py-4">Welcome Guest</div>}
            </section>
           
        </>
     );
}
export default DGreet;