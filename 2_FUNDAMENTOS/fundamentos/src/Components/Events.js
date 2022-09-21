const Events = () => {

    const handleMyEvent = (e) => {
        console.log("click - OK", e)
    }

    const renderSomething = (x) => {
        if (x){
           return <h1>Imprimiu no IF</h1>     
        }else{
            return <h1>Imprimiu no ELSE</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                {/* Evitar esse tipo de uso, separar as responsabilidades... 
                Mais legível escrever a função fora do jsx */}
                <button onClick={() => console.log('Executado no html')}>Clique aqui também...</button> 
                <button onClick={() => {
                    if(true) {
                        console.log('Misturar lógica e html não é bom');
                    }
                }}>Clique aqui de quiser</button>
            </div>
            {renderSomething(true)};
            {renderSomething(false)};
        </div>
    );
};

export default Events; 