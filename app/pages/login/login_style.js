import { StyleSheet } from 'react-native';
//import {login_background_1} from '../../assets/img/login_background_1.png';


const login_style = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        marginTop: 30,
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: '#D9272E',
        borderColor: '#d6d7da',
        width: '50%',
        height: 50,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '70%',
        alignSelf: 'center',
        alignContent: 'center'
    },
    header: {
        marginTop: 30,
        backgroundColor: 'transparent',
        zIndex: -1
    },
    content: {
        marginTop: 30,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignContent: 'center'
    },
    footer: {
        backgroundColor: 'transparent'
    },
    Text: {
        alignSelf: 'center',
        alignContent: 'center'
    }
});

export default login_style;