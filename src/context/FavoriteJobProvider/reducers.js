import {Alert} from 'react-native';

export default function (state, action) {
  switch (action.type) {
    case 'ADD_JOB':
      const {item} = action.payload;
      state.favoriteJobList.map(value => {
        if (value.id == item.id) {
          console.log('girdi: ' + value.id);
          console.log('girdi: ' + item.id);
          Alert.alert(
            'MyKodWork',
            'Favoride aynı ilan var, aynı ilanı tekrardan ekleyemessiniz',
          );
          return state;
        }
      });
      const newList = [...state.favoriteJobList, item];
      Alert.alert('myKodWork', 'İlan Favorilere Eklendi');
      return {...state, favoriteJobList: newList};
    case 'ITEM_DELETE':
      const {itemRemove} = action.payload;

      const neewList = state.favoriteJobList.filter(
        value => value.id !== itemRemove.id,
      );

      return {...state, favoriteJobList: neewList};
    default:
      return state;
  }
}
