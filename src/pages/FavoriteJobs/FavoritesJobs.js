import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import styles from './FavoritesJobs.style';
import {useSelector} from 'react-redux';
import JobCard from '../../components/JobCard';
import {useDispatch} from 'react-redux';

const FavoritesJobs = ({navigation}) => {
  const list = useSelector(selector => selector.favoriteJobList);
  const dispatch = useDispatch();

  const itemDelete = item => {
    dispatch({type: 'ITEM_DELETE', payload: {itemRemove: item}});
  };

  const handlePress = item => {
    navigation.navigate('JobDetail', {item});
  };

  const job = ({item}) => (
    <JobCard
      jobItem={item}
      handlePress={() => handlePress(item)}
      itemDelete={() => itemDelete(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>FavoritesJobs</Text>
      <FlatList keyExtractor={item => item.id} data={list} renderItem={job} />
    </SafeAreaView>
  );
};

export default FavoritesJobs;
