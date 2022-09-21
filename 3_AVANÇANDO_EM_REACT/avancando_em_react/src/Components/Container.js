const Container = ({children, value}) => {
    return (
        <div>
            <p>Este texto está no componente.</p>
            {children} 
            <span>e este é o meu value: {value}</span>
        </div>
    )
}

export default Container