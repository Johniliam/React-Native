export const TiposBasicos = () => {
    
    let nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes = ['Velocidad', 'Volar', 'Fuerza', 'Invisivilidad', 123];

    
    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
