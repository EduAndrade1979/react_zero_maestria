const TemplateExpressions = () => {

    const name = "Edu Andrade";
    const person = {
        age: "43",
        job: "programmer",
    }
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;

    return(
        /*O jsx interpreta arquivos em javascript */
        <div>
            <h3>Olá {name}, como vai?</h3>
            <h3>Sua idade é {person.age} e você trabalha como {person.job}.</h3>
            <h3>Somando em js: 8 + 8 = {8 + 8}</h3>
            <h3>Data de hoje: {dd}/{mm}</h3>
        </div>
    );
};

export default TemplateExpressions;