import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './JobCard.style';

const JobCard = ({jobItem, handlePress, itemDelete}) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.position}>{jobItem.name}</Text>
        <Text style={styles.domain}>{jobItem.type}</Text>
        <View>
          <Text style={styles.country_container}>
            {jobItem.locations[0].name}
          </Text>
        </View>
        <Text style={styles.level}>{jobItem.levels[0].name}</Text>
        {itemDelete && (
          <TouchableOpacity style={styles.removeBtn} onPress={itemDelete}>
            <Text style={styles.removeTxt}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
