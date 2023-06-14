import './App.css';
import Header from './Header';
import Content  from './Content';

function App() {

  // const handleNameChange =  () =>{
  //   const names = ['Bob', 'Kevin', 'Dave']
  //   const random = Math.floor(Math.random()*3)
  //   return names[random]
  // }
  return (
    <div className="App">
      <Header />
      <Content />

    </div>
  );
}

export default App;
