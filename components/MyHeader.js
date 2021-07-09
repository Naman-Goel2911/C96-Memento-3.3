import * as React from 'react'
import {View} from 'react-native'
import {Header} from 'react-native-elements'

export default class MyHeader extends React.Component{
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View>
                <Header 
                centerComponent = {{text: this.props.title, style: {color: 'white', fontSize: '25', fontWeight: 'bold'}}}
                backgroundColor = 'cyan'
                />
            </View>
        )
    }
}