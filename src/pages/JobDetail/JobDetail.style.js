import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  content: {
    margin: 12,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sub_cont: {
    flexDirection: 'row',
    marginTop: 10,
  },
  label: {
    color: '#ef5451',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lvl: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sub_header: {
    textAlign: 'center',
    margin: 10,
    paddingTop: 10,
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
  },
  detail: {
    backgroundColor: 'white',
    width: '100%',
    height: '55%',
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
  },
  btnJ: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef5451',
    marginTop: 25,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 8,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
    paddingLeft: 10,
  },
});
