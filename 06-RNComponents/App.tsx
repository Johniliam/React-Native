import React from 'react'
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { StackNavigator } from './src/navigator/StackNavigator';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'string',
//     // background: 'grey',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//   }
// };

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AppState =  ({ children }: Props) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <AppState>
      <StackNavigator/>
    </AppState>
  )
}


 export default App;