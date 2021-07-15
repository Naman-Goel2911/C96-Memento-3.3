import * as React from 'react'
import { Text, View } from 'react-native'
import MyHeader from '../components/MyHeader'
import {ListItem, Icon} from 'react-native-elements'
import db from '../config'
import { RFValue } from 'react-native-responsive-fontsize'
import SwipableFlatList from '../components/SwipableFlatList'
import firebase from 'firebase'

export default class ShoppingListScreen extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            userId: firebase.auth().currentUser.email,
            allItems: []
        }
        this.requestRef = null
    }

    componentDidMount = () => {
        this.getRequestedShoppingList()
    }

    componentWillUnmount = () => {
        this.requestRef()
    }

    getRequestedShoppingList = () => {
        this.requestRef = db.collection('shoppingItems').where('item_status', '==', 'added')
        .where('user_id', '==', this.state.userId)
        .onSnapshot((snapshot)=> {
            var allItems = []
            snapshot.docs.map((doc)=> {
                var items = doc.data()
                items["doc_id"] = doc.id
                allItems.push(items)
            })
            this.setState({
                allItems: allItems
            })
        })
    }

    keyExtractor = (item, index) => {
        index.toString()
    }

    renderItem = ({item, i}) => {
        return (
            <ListItem 
            key = {i}
            leftElement = {<Icon name = 'item' type = 'font-awesome' color = 'white' />}
            title = {item.item_name}
            subtitle = {item.price}
            titleStyle = {{color: 'black', fontWeight: 'bold'}}
            bottomDivider
            />
        )
    }


    render()
    {
        return(
            <View>
                <View>
                    <MyHeader 
                    title = {'Shopping List'}
                    navigation = {this.props.navigation}
                    />
                </View>
                <View style = {{flex: 0.9}}>
                    {
                        this.state.allItems.length === 0
                        ?
                        (
                            <View>
                                <Text>You have no items added</Text>
                            </View>
                        )
                        :
                        (
                           <SwipableFlatList 
                           allNotifications = {this.state.allItems}
                           />
                        )
                    }
                </View>
            </View>
        )
    }
}
