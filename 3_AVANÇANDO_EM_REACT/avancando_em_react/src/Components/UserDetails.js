const UserDetails = ({persons}) => {


  return (
    <ul>
        {persons.map((persons) => (
            <li key={persons.id}>
                <h2>Dados Pessoais</h2>                
                <p>Nome: {persons.name}</p>
                <p>Idade: {persons.age}</p>
                <p>Profissão: {persons.job}</p>
                <p>Pode dirigir: {persons.age >= 18 ? (<span>Sim</span>) : (<span>Não</span>)}</p>
                <p>=============================================</p>
            </li>
        ))}
    </ul>
  )
}

export default UserDetails