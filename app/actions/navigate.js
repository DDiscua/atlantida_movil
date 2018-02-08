import { NavigationActions } from 'react-navigation';

export const navigate = (PATH) => {
    return dispatch => {
        return dispatch(NavigationActions.navigate({ routeName: PATH }))
    }
}