import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    container: {
        justifyContent: 'center',
        width: '80%',
        paddingBottom: 0,
        marginTop: 0
    },
    radioButton: {
        color: '#0000',
    },
    radioButtonTitle:{
        fontSize: 17,
        marginBottom: 10,
        marginTop: 20
    },
    input: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginTop: 20
    },
    inputTouchableOpacity:{
        backgroundColor: '#f9f9f9',
        width: '100%',
        marginBottom: 0,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 15,
    },
    textTouchableOpacity:{
        color: '#999999',
        fontSize: 17,
    },
    btnSubmit: {
        backgroundColor: '#90cc0c',
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 20
    },
    submitText: {
        color: "#FFF",
        fontSize: 18
    },
    btnRegister: {
        marginTop: 10
    },
    registerText: {
        color: '#3b3b3b',
    },
    dateComponent:{
        width: 350,
    },
    btnBirthday:{
        backgroundColor: "#000"
    }
});