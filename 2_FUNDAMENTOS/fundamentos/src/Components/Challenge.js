const Challenge = () => {

    const A = 60;
    const B = 40;

    const handleSum = () => {
        let result = A + B;
       
        console.log(result)
    }

    return (
        <div>
            <h3>Números que serão somados: {A} e {B}</h3>
            <button onClick={handleSum}>Somar</button>            
        </div>
    );
}

export default Challenge