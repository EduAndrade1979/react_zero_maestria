import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled input - Se receber user por param. preenche values dos inputs no form
    // 3 - Gerenciamento de dados //
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : 0);

    const handleName = (e) => {
        setName(e.target.value);        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        // 7 - Resetando forms //
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }  

    return (
        <div>
            {/* 5 - Envio de form */}
            {/* 1 - criação do form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
                </div>
                {/* 2 - label envolvendo input */}
                <label>
                    <span>Email</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>  
                {/* 8 - Textarea */}  
                <label>
                    <span>Bio</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label> 
                {/* 9 - Select */} 
                <label>
                    <span>Seleção cargo</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="0">Selecione</option>
                        <option value="1">Admin</option>
                        <option value="2">Gestor</option>
                        <option value="3">Supervisor</option>
                        <option value="4">Secretario</option>
                    </select>
                </label>          
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm