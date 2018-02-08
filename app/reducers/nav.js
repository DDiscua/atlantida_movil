
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, ACCOUNTS_NAVIGATE } from '../actions/constants/TYPES';
import { AppNavigator } from '../routing/AppNavigator';
import { NavigationActions } from 'react-navigation';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

export default function nav(state = initialNavState, action) {
    let nextState;

    switch (action.type) {
        case LOGIN_SUCCESS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case LOGOUT_SUCCESS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;

        case ACCOUNTS_NAVIGATE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Accounts' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}