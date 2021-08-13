//las interfaces sirven para crear reglas de validacion a los objetos (objetos complejos)
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion; //al ser un objeto anidado se crea una interface nueva
}

interface Direccion{
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Johnatan',
        edad: 21,
        direccion: {
            pais: 'Mexico',
            casaNo: 206
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) } 
                </pre>
            </code>
        </>
    )
}
