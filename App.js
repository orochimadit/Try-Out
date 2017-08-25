import React ,{ Component }from 'react';
import { StyleSheet, Text, View, 
Image ,AppRegistry,ListView, StatusBar} from 'react-native';



const ds = new ListView.DataSource({rowHasChanged:(row1,row2)=>row1 != row2});
export default class App extends React.Component {
	constructor(){
		super();
		this.state={
			dataSource:ds.cloneWithRows([
			{name: "Aditya Pratama",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},
			{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},
			{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},
			{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"},{name: "Aditya Badra",
			number : "085654411081",
			email: "adityapratamabadra@gmail.com",
			address: "123 gegerkalong"}
			
			]),
		}
	}
	
	_renderRow(rowData){
		return(
		<View style = {{borderWidth : 2,alignItems: 'center',justifyContent:'center',marginTop:5}}>
		<Text>{rowData.name}</Text>
		<Text>{rowData.number}</Text>
		<Text>{rowData.email}</Text>
		<Text>{rowData.address}</Text>
		
		</View>
		);
	}
  render() {
	
    return (
	
  <View style={{flex:1 }}>
      
		<StatusBar hidden/>
		<ListView
			dataSource = {this.state.dataSource}
			renderRow={this._renderRow}
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
	fontSize: 20,
	textAlign :'center',
	margin: 10,
  },
  instructions: {
	  textAlign: 'center',
	  color : '#333333',
	  marginBottom: 5,
  },
});
