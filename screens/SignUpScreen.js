import React,{Component} from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import db from "../config";
import firebase from "firebase";

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      isModalVisible: "false"
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Passwords don't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            name: this.state.name,
            email_id: this.state.emailId
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "COOL", onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };


  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: "100%" }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration Screen</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Name"}
                maxLength={8}
                onChangeText={text => {
                  this.setState({
                    name: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Email"}
                keyboardType={"email-address"}
                onChangeText={text => {
                  this.setState({
                    emailId: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    password: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Confirm Password"}
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    confirmPassword: text
                  });
                }}
              />
              <View>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() =>
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    )
                  }
                >
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.setState({ isModalVisible: false })}
                >
                  <Text style={{ color: "#db0f0f", fontWeight: "800", fontSize: 20 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>Sign-Up</Text>
        {this.showModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78B5B8",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    color: "#01437d",
    alignSelf: "center"
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#005e36",
    margin: 50,
    fontWeight: "500"
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#81dd21",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 80
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#6603ab",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b2d47",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  registerButtonText: {
    color: "#b5c5df",
    fontSize: 15,
    fontWeight: "bold"
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
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