import MyComponent from "./MyComponents";

const FirstComponent = () => {
    //Comentário fora do jsx (sintax)
    return (
        <div>
            {/*Comnetário dentro do jsx (sintax) */}
            <h1>Primeiro componente</h1>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;