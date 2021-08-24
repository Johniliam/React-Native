import { useRef, useState } from "react";

enum Operadores {
    division, multiplicacion, resta, suma
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [numero, setNumero] = useState('100');
    const ultimaOperacion = useRef<Operadores>()
    
    const clear = () => {
        setNumero('0');
        setNumeroAnterior('');
    }
    const armarNum = ( numeroTexto: string ) => {
        
        // No aceptar mas de un punto
        if(numero.includes('.') && numeroTexto === '.') return;
        if( numero.startsWith('0') || numero.startsWith('-0') ){
            // Punto decimal
            if( numeroTexto === '.'){
                setNumero( numero + numeroTexto );
                //evaluar si es otro cero permitir
            }else if( numeroTexto === '0' && numero.includes('.')){
                setNumero( numero + numeroTexto );
                // Evaluar si es diferente de 0 y no tiene punto
            }else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero( numeroTexto );
                //Evitar 00000.0
            }else if( numeroTexto === '0' && !numero.includes('.') ){
                setNumero( numero );
            }else{
                setNumero( numero + numeroTexto )
            }
        }else{
            setNumero( numero + numeroTexto )
        }
    }
    const positivoNegativo = () => {
        if(numero === '0' || numero === '0.') return;
        if (numero.includes('-')) {
            setNumero( numero.replace('-', '') )
        } else{
            setNumero( '-' + numero )
        }
    }
    const del = () => {
        // Si es el ultimo numero convertir a 0
        if( numero.length === 1 ){
            setNumero('0')
            // Si es negativo y ultimo numero convertir a 0
        }else if( numero.length === 2 && numero.includes('-') ){
            setNumero('0')
            // Quitar el ultimo caracter
        }else{
            setNumero( numero.slice(0, -1) )
        }
    }
    const cambiarNumPorAnterior = () => {
        if(numero === '0' || numero === '0.') return;
        
        if( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0, -1) );
        }else{
            setNumeroAnterior( numero );
        }
        setNumero('0');
    }
    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.division
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicacion
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.resta
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.suma
    }
    
    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );
        switch ( ultimaOperacion.current ) {
            case Operadores.suma:
                setNumero( `${ num1 + num2 }` );
                break;
                
            case Operadores.resta:
                setNumero( `${ num2 - num1 }` );
                break;
                
            case Operadores.division:
                setNumero( `${ num2 / num1 }` );
                break;
            
                case Operadores.multiplicacion:
                setNumero( `${ num1 * num2 }` );
                break;
        }
        setNumeroAnterior('');
    }
    
    return{
        numero, 
        numeroAnterior, 
        clear, armarNum, 
        positivoNegativo, 
        del, 
        btnSumar, 
        btnRestar, 
        btnMultiplicar, 
        btnDividir, 
        calcular
    }
}
