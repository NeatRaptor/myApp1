import React,{Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from "./screens/HomeScreen";
import ToPayWeek from "./screens/ToPayWeek";
import ToPayToday from "./screens/ToPayToday";
import ToPayMonth from "./screens/ToPayMonth";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

export default class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  HomeScreen: {screen: HomeScreen},
  ToPayMonth: {screen: ToPayMonth},
  ToPayToday: {screen: ToPayToday},
  ToPayWeek: {screen: ToPayWeek},
  SignUpScreen: {screen: SignUpScreen},
  LoginScreen: {screen: LoginScreen},
})

const AppContainer = createAppContainer(switchNavigator);