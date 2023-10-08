import './App.css';
import Button from './BUtton';
import DGreet from './Component/DGreet';
import Heading from './Component/Heading';
import  Person from './Component/Person';
import Status from './Component/Status';

function App() {

 const personName = {
    first: "Peter",
    last: "Olalekan",
}

  return (
    <div className="App">

        <DGreet name="Peter" isLoggedIn = {true}/>
        <Person names = {personName}/>
        <Status status='Success' />
        <Heading>I am not understanding, but I Will</Heading>
        <Button handleClick={(event,id) =>{
          console.log("Clicked", event, id)
        }}/>
    </div>
  );
}

export default App;
