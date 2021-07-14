import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CustomSidebarMenu from './CustomSidebarMenu'
import AppTabNavigator from './AppTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import {Icon} from 'react-native-elements'
import CalendarScreen from '../screens/CalendarScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: CalendarScreen,
        navigationOptions: {
            drawerIcon: <Icon 
            name = 'home'
            type = 'fontawesome5'
            />
        }
    },
    ShoppingList: {
        screen: AppTabNavigator,
        navigationOptions: {
            drawerIcon: <Icon 
            name = 'gift'
            type = 'font-awesome'
            />
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            drawerIcon: <Icon 
            name = 'settings'
            type = 'fontawesome5'
            />,
            drawerLabel: 'Settings'
        }
    },
    },
    {
        contentComponent: CustomSidebarMenu
    },
    {
        initialRouteName: 'Home'
    }
)