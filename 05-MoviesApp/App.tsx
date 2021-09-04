import 'react-native-gesture-handler';

import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AppState = ({ children }: Props) => {
  return(
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>  
      </AppState>
      {/* <FadeScreen/> */}
    </NavigationContainer>
  )
}

export default App;
