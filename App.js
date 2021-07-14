import * as React from 'react'
import { Text, View } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class App extends React.Component{
  render()
  {
    return(   
        <AppContainer />
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
    WelcomeScreen: {screen: WelcomeScreen},
    Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)