import './App.css';
import MyForm from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{name: "Edu", email: "edu@edu.edu", bio: "Pediatra", role: 3}}/>
    </div>
  );
}

export default App;
