import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerLogo: {
    justifyContent: 'center',
    marginBottom: -20,
    marginTop: 100,
  },
  logoImg: {
    width: 220,
    height: 220,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
    marginTop: 0,
  },
  input: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 16,
    borderRadius: 7,
    padding: 15,
    height: 55,
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
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#3b3b3b',
  },
  forgotPassword: {
    color: '#222',
    fontWeight: 'bold',
  },
});
