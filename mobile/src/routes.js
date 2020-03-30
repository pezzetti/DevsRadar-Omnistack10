import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main: { screen: Main, navigationOptions: {title: 'DevsRadar'}},
        Profile: { screen: Profile, navigationOptions: {title: 'Github Profile'}},
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7D40E7'
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
        }
    })
);

export default Routes;