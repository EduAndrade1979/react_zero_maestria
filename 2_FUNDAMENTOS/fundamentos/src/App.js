//Import styles
import './App.css';

//Import Components
import FirstComponent from './Components/FirstComponent'
import TemplateExpressions from './Components/TemplateExpressions';
import MyComponent from './Components/MyComponents';
import Events from './Components/Events';
import Challenge from './Components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Arquivo fundamentos</h1>
      <FirstComponent/>   
      <TemplateExpressions/>   
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
