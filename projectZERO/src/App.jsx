import './App.css'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Word from './components/Word';
import List from './components/LIst';

function App() {
  const name = "Salazar";
  const newName = name.toUpperCase();

  return (
      <div>
        <h1>Hi {newName}!</h1>
        <Word/>
        <SayMyName nome='Salazar'/>
        <Pessoa name='Salazar' age='20' work='Programador' photo='https://picsum.photos/seed/picsum/200' />
        <List/>
      </div>
  )
}

export default App;
