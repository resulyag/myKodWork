import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  position: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  domain: {
    fontSize: 17,
    color: 'black',
  },
  country_container: {
    backgroundColor: '#ef5451',
    padding: 7,
    borderRadius: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  level: {
    textAlign: 'right',
    color: '#ef5451',
    fontWeight: 'bold',
    fontSize: 15,
  },
  removeBtn: {
    backgroundColor: '#ef5451',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  removeTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
