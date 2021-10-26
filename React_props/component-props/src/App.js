
import './App.css';


function WhoAmI({name,nameFun, surname, link}) {
  return (
    <div>
      <h1>My name is {name.firstName}, surname - {surname}</h1>
      <a href={link}>My profile</a>
      <h2>My learning language is {nameFun()}</h2>   
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <WhoAmI name={{firstName: 'John'}} surname='Smith' link='facebook.com' nameFun={() => {return 'React'}}/>
        <WhoAmI name='Alex' surname='Sheva' link='vk.com' nameFun={() => {return 'Node.js'}}/>
    </div>
  );
}

export default App;
