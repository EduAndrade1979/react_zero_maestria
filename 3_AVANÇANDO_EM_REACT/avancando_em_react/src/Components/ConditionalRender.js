import { useState } from "react"

const ConditionalRender = () => {

    let [x] = useState(false);

    let [name, setName] = useState("Marcos")

  return (
    <>
    <div>
        {/* && é como um IF simples que valida true ou false*/}
        {x && <p>X é true!</p>} 
        {!x && <p>Agora X é false!</p>}
    </div>
    <div>
        {/*Validação ternária (condição ? true : false)*/}
        {name === "Marcos" ? (
        <p>O nome é {name}!</p>
        ) : (
        <p>Nome alterado para {name}!</p>
        )} 
    </div>
    <button onClick={() => {setName("Julia")}}>Trocar nome</button>
    </>
  )
}

export default ConditionalRender