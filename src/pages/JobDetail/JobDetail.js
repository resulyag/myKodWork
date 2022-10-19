import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './JobDetail.style';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch} from 'react-redux';

const JobDetail = ({route}) => {
  const {item} = route.params;
  const htmlContent = {html: item.contents};
  const {width} = useWindowDimensions();

  const dispatch = useDispatch();
  const addFavoriteJob = () => {
    dispatch({type: 'ADD_JOB', payload: {item: item}});
  };

  const onSubmit = () => {
    Linking.openURL(item.refs.landing_page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.sub_cont}>
          <Text style={styles.label}>Locations: </Text>
          <Text style={styles.lvl}>{item.locations[0].name}</Text>
        </View>
        <View style={styles.sub_cont}>
          <Text style={styles.label}>Job level: </Text>
          <Text style={styles.lvl}>{item.levels[0].name}</Text>
        </View>
        <Text style={styles.sub_header}>İş Detayı</Text>
        <View style={styles.detail}>
          <ScrollView>
            <RenderHtml
              contentWidth={width}
              source={htmlContent}
              tagsStyles={tagsStyles}
            />
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnJ} onPress={onSubmit}>
            <Icon name="login" size={25} color="white" />
            <Text style={styles.btnText}> Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnJ} onPress={addFavoriteJob}>
            <Icon name="cards-heart" size={25} color="white" />
            <Text style={styles.btnText}>Favorite Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JobDetail;

const tagsStyles = {
  body: {
    whiteSpace: 'normal',
    color: 'gray',
    padding: 10,
  },
  p: {
    color: 'black',
  },
};
