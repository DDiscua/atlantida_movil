
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Accounts from '../pages/accounts/accounts';

export const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
        path: 'Login'
    },
    Home: {
        screen: Home,
        path: 'Home'
    },
    Accounts: {
        screen: Accounts,
        path: 'Accounts'
    },
    Index: {
        screen: Login,
    }
},
    {
        initialRouteName: 'Index',
        headerMode: 'none',

        /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);

export default AppNavigator