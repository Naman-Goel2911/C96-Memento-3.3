import * as React from 'react'
import { Text, View } from 'react-native'
import MyHeader from '../components/MyHeader'

export default class AddingShoppingListScreen extends React.Component{
    render()
    {
        return(
            <View>
                <View>
                    <MyHeader 
                    title = {'Memento-Adding Shopping List'}
                    navigation = {this.props.navigation}
                    />
                </View>
                <View>
                    <Text>
                        Adding Shopping List Screen
                    </Text>
                </View>
            </View>
        )
    }
}