import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["João", "Maria", "José", "Isabel"]);

    const [user, setUser] = useState([
        { id: 1, Name: "Tiago", age: 25 },
        { id: 2, Name: "Marcelo", age: 35 },
        { id: 3, Name: "Claudia", age: 36 },
        { id: 4, Name: "Juliana", age: 23 },
    ]);

    const DeleteUser = () => {
        let randomNumber = Math.floor(Math.random() * 5);

        setUser((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id)
        })
    }


    return (
        <>
            <ul>
                {/*Os parenteses no retorno do metodo map se devem ao fato de que
                o retorno é um objeto porque JSX é objeto*/}
                {/*Evitar utilizar o índice do map, qdo der, usar uma chave única (id)*/}
                {list.map((item, i) => (
                    <li key={i}>{item}</li> 
                ))}
            </ul>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>Nome: {user.Name} — Idade: {user.age} </li>
                ))}
            </ul>
            <button onClick={DeleteUser}>Delete random user</button>
        </>
    )
}

export default ListRender