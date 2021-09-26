import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <Image
            source={require("../assets/WIP.png")}
            style={{width:200, height: 200}}/>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate("ToPayMonth")}}>
          <Text style = {styles.title}>Home Screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BE85",
    alignItems: "center",
    justifyContent: "center"
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    color: "#01437d",
    alignSelf: "center"
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20
  }
});