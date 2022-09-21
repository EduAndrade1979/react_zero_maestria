
import './App.css';
import City from './assets/city.jpg';
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import { useState } from 'react';
import CarDetails from './Components/CarDetails';
import Fragment from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';
import UserDetails from './Components/UserDetails';

function App() {
  let [userName] = useState("Marta")

  let [cars] = useState([
    {id: 1, brand: "Peugeot", color: "preto", km: 10000, newCar: false},
    {id: 2, brand: "Kia", color: "verde", km: 130000, newCar: false},
    {id: 3, brand: "Ferrari", color: "vermelha", km: 0, newCar: true}
  ])

  function PrintMessage() {
    alert("Imprimindo mensagem do componente pai.")
  }

  /*=====================STATE LIFT============================ */
  /*message = recebe o valor....setMessage = altera o valor*/
  const [message, setMessage] = useState(""); 

  /*Função que envia o dado para alteração do state*/
  const handleMessage = (msg) => {
    setMessage(msg)
  } 
  /*=====================END STATE LIFT======================== */

  const [persons] = useState([
    {id: 10, name: "Maria", age: 38, job: "Secretária"},
    {id: 11, name: "Gustavo", age: 17, job: "Estudante"},
    {id: 12, name: "Carlos", age: 43, job: "Carteiro"}
  ])
  


  return (    
    <div className="App">
      <h1>Avançando em react</h1>
      {/*Imagem na pasta public*/}
      <img src="/img1.jpg" alt="Paisagem" />
      {/*Imagem na pasta assets (qualquer pasta que esteja em src) */}
      <img src={City} alt="Cidade" />
      <ManageData />     
      <ListRender />  
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={userName} />
      {/*Destructuring*/}
      <CarDetails brand="Ford" km={86000} color="azul" newCar={false}/>
      {/*Reaproveitando componente*/}
      <CarDetails brand="VW" km={0} color="azul" newCar={true}/>
      <CarDetails brand="Ford" km={190000} color="azul" newCar={false}/>
      {/*Loop com map() */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          km = {car.km}
          color = {car.color}
          brand = {car.brand}
          newCar = {car.newCar}
        />
      ))}
      {/* Fragment - explicação no componente */}
      <Fragment/>
      {/*Children - Se o texto abaixo não for recebido por parametro no próprio componente e utilizado, será ignorado */}
      <Container value="myValue">
        <p>Este texto está na chamada do componente</p>
      </Container>
      {/*Execute function - function passada por props e executada no componente filho */}
      <ExecuteFunction myFunction={PrintMessage} />
      {/*State lift */}
      <Message msg={message} /> {/*Passando o state para ser impresso na tela */}
      <ChangeMessageState  handleMessage={handleMessage}/>
      <UserDetails persons={persons} />
    </div>
  );
}

export default App;
