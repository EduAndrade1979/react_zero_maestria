const ExecuteFunction = ({myFunction}) => {
  return (
    <button onClick={myFunction} style={{'marginTop': '30px'}} >Exibir mensagem do componente pai</button>
  )
}

export default ExecuteFunction