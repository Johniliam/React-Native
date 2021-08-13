export const Funciones = () => {
    
    const cuadrado = (num: number): number => {
        return num * num;
    }
    
    
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: { cuadrado( 4 ) }</span>
        </>
    )
}
