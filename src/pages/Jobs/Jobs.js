import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './Jobs.style';
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';
import API_URL from '../../config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Jobs = ({navigation}) => {
  const {data, jobsLoading, jobsError} = useFetch(API_URL);

  if (jobsLoading) {
    return <Loading />;
  }

  if (jobsError) {
    return <Error />;
  }

  const handlePress = item => {
    navigation.navigate('JobDetail', {item});
  };

  const job = ({item}) => (
    <JobCard jobItem={item} handlePress={() => handlePress(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList keyExtractor={item => item.id} data={data} renderItem={job} />
    </SafeAreaView>
  );
};

export default Jobs;
