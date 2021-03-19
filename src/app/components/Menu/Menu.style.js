import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 0
    },
    logoImg: {
        width: 180,
        height: 180
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 0
    },
    input: {
        backgroundColor: '#f9f9f9',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#90cc0c',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
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
    }
});