import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    width: '80%',
  },
  titlePage:{
    fontSize: 25,
    fontWeight: '700',
    marginTop: 60,
    marginBottom: 20,
    alignSelf: 'center'
  },
  sliderForm:{
    width: '100%',
    height: 40
  },
  viewBirthDay:{
    marginBottom: 15,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 7,
  },
  radioButton: {
    color: '#0000',
  },
  radioButtonTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 1,
  },
  input: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  inputTouchableOpacity: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 5,
  },
  textTouchableOpacity: {
    marginLeft: 5,
    color: '#000',
    fontSize: 16,
    textAlignVertical: 'center'
  },
  textRadioBottom:{
    fontSize: 16,
    color: "#000"
  },
  btnSubmit: {
    backgroundColor: '#90cc0c',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
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
  dateComponent: {
    width: 350,
  },
  btnBirthday: {
    backgroundColor: '#000',
  },
});
