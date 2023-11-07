import './App.css';
import UserLog from './Auth/Userlog';
import Button from './BUtton';
import DGreet from './Component/DGreet';
import Heading from './Component/Heading';
import  Person from './Component/Person';
import Status from './Component/Status';
import StyleComp from './Component/StyleComp';
import Counter from './state/counter';

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
        
        <StyleComp value ="Jesus Is Lord" style={{border: "2px solid brown", marginTop:"20px"}}/>
        <UserLog />
        <Counter />
    </div>
  );
}

export default App;
