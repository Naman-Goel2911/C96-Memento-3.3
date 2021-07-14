import * as React from 'react'
import { Text, View } from 'react-native'
import MyHeader from '../components/MyHeader'

export default class ShoppingListScreen extends React.Component{
    render()
    {
        return(
            <View>
                <View>
                    <MyHeader 
                    title = {'Memento-Shopping List'}
                    navigation = {this.props.navigation}
                    />
                </View>
                <View>
                    <Text>
                        Shopping List Screen
                    </Text>
                </View>
            </View>
        )
    }
}