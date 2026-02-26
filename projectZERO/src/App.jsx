import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const name = "Salazar";
  const newName = name.toUpperCase();

  const sum = (a, b)=>{return a + b};

  return (
    <>
      <div>
        <h1>Hi {newName}!</h1>
        <HelloWorld/>
        <p className="read-the-docs">
          Sum 1 and 3 result in : {sum(1,3)}
        </p>
      </div>
    </>
  )
}

export default App
