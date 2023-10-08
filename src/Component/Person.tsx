type PersonProps = {
   names:{
    first: string,
    last: string
   }
}

const Person = (props: PersonProps) => {
    return ( 
        <>
        <h3 className="text-center text-blue-300">My name is {props.names.first} {props.names.last}</h3>
        </>
     );
}
 
export default Person;
