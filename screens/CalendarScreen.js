import * as React from 'react'
import { Text, View } from 'react-native'
import MyHeader from '../components/MyHeader'
import {Calendar} from 'react-google-calendar-api'

export default class CalendarScreen extends React.Component{
    render()
    {
        return(
            <View>
                <View>
                    <MyHeader 
                    title = {'Memento-Calendar'}
                    navigation = {this.props.navigation}
                    />
                </View>
                <View>
                    <Calendar apiKey={'AIzaSyAo0QMcC3XQiUjMnruBdvhl_w6o4zC9Grw'} calendars={'vakulg@gmail.com'} />
                </View>
            </View>
        )
    }
}