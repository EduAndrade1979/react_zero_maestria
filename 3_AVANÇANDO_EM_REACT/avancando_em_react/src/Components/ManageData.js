import { useState } from 'react';


const ManageData = () => {
    let [number, setNumber] = useState(12);  /*Inicializa como se fosse uma variável*/
    
    return (
        <div>
            <p>O valor do useState é {number}</p>
            <button onClick={() => setNumber(36)}>Mudar useState</button>            
        </div>
    )
}

export default ManageData