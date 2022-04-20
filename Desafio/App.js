import React, {Component} from 'react';
import {SafeAreaView,Text,StyleSheet,FlatList} from 'react-native';
import api from './src/Services/Api';
import Status from './src/Pages/Status'
export default class App extends Component{


    constructor(props){
        super(props);
        this.state = {
          statusDatas: []
        }
    }

  async  componentDidMount (){
        const response = await api.get('/status');
        this.setState({
            statusDatas: response.data
        })
    }
    render (){
        return (
            <SafeAreaView style={StyleSheet.container}>
                <FlatList
                data={this.state.statusDatas}
                keyExtractor={item =>item.status}
                renderItem={({item}) => <Status data={item}/>}

                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black'
    }
});