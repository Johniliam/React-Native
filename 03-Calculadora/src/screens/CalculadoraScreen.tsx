import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { 
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
     } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer }>
            <Text style={ styles.numAnterior }>{ numeroAnterior }</Text>
            <Text 
                style={ styles.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                { numero }
            </Text>


            <View style={ styles.fila }>

                <BotonCalc texto='C' color= '#9B9B9B' textColor='black' accion={ clear }/>
                <BotonCalc texto='+/-' color= '#9B9B9B' textColor='black' accion={ positivoNegativo }/>
                <BotonCalc texto='del' color= '#9B9B9B' textColor='black' accion={ del }/>
                <BotonCalc texto='/' color= '#FF9427' accion={ btnDividir }/>

            </View>
            
            <View style={ styles.fila }>

                <BotonCalc texto='7' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='8' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='9' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='X' color= '#FF9427' accion={ btnMultiplicar }/>

            </View>

            <View style={ styles.fila }>

                <BotonCalc texto='4' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='5' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='6' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='-' color= '#FF9427' accion={ btnRestar }/>

            </View>

            <View style={ styles.fila }>

                <BotonCalc texto='1' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='2' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='3' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='+' color= '#FF9427' accion={ btnSumar }/>

            </View>

            <View style={ styles.fila }>

                <BotonCalc texto='0' color= '#2D2D2D' ancho accion={ armarNum }/>
                <BotonCalc texto='.' color= '#2D2D2D' accion={ armarNum }/>
                <BotonCalc texto='=' color= '#FF9427' accion={ calcular }/>

            </View>
        {/* #2D2D2D gris claro */}
        {/* #9B9B9B gris oscuro */}
        {/* #FF9427 anaranjado */}
        </View>
    )
}