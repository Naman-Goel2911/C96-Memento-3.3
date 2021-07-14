import * as React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ShoppingListScreen from '../screens/ShoppingListScreen'
import AddingShoppingListScreen from '../screens/AddingShoppingListScreen';

const AppTabNavigator = createBottomTabNavigator({
    ShoppingList: {screen: ShoppingListScreen, 
    navigationOptions: {
        tabBarIcon: <Image 
            source = {require('../assets/shoppingListImage.jpg')}
            style = {{width: 20, height: 20}}
        />,
        tabBarLabel: "Shopping List"
    }},
    AddingShoppingList: {screen: AddingShoppingListScreen,
        navigationOptions: {
            tabBarIcon: <Image 
                source = {require('../assets/addingShoppingListImage.jpg')}
                style = {{width: 20, height: 20}}
            />,
            tabBarLabel: "Add items"
        }
    }
})

export default AppTabNavigator;