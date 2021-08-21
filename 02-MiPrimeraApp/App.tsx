import React from 'react'
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
//import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
//import { DimensionesScreens } from './src/screens/DimensionesScreens';
//import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    //safe area in the phone
    <SafeAreaView style={{ flex:1 }}> 
      {/* <HolaMundoScreen/> //custom hook */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreens/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
    
  )
}
