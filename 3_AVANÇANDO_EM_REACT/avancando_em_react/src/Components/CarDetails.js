/*Configuram o uso de DESTRUCTURING: {} - Qdo é objeto e [] - Qdo é array */
const CarDetails = ({  km, color, brand, newCar}) => {
  return (
    <>
    <h2>Detalhes do veículo</h2>
    <ul>
        <li>Marca: {brand} </li>
        <li>Km: {km} </li>
        <li>Cor: {color} </li>
        {newCar ? (<li>Carro zero!!</li>) : (<li>Carro usado!</li>)}
    </ul>
    </>
  )
}

export default CarDetails