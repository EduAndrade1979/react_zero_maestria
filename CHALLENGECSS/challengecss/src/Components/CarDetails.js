import styles from "./CarDetails.module.css"
import { useState } from 'react'

const CarDetails = () => {

  const [CarDetails] = useState([
    {id: 0, brand: "Ford", year: 2020, km: 80000, newCar: false},
    {id: 1, brand: "KIA", year: 2018, km: 130000, newCar: false},
    {id: 2, brand: "Chevrolet", year: 2019, km: 95000, newCar: false},
    {id: 3, brand: "Honda", year: 2022, km: 100, newCar: true}

  ]);  

  return (
    <div>        
        <hr />
        <ul>
            {CarDetails.map((item) => (
                <li key={item.id}>
                    <p>Marca: {item.brand}</p>
                    <p>Year: {item.year}</p>
                    <p>Km: {item.km}</p>
                    <p className={item.newCar ? (styles.new_car) : null}>Oportunidade</p>
                    <hr />
                </li>
            ))}
        </ul>  
    </div>
  )
}

export default CarDetails