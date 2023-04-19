import React from 'react'
import { View, Text, Image } from 'react-native'


import styles from './about.style'
import { checkImageURL } from '../../../utils';

const About = ({ image_url, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Ad : </Text>
      
      <View style={styles.imageContainer}>
        <View style={styles.logoBox}>
            <Image source={{uri: checkImageURL(image_url) ? image_url : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}} style={styles.logoImage}/>
        </View>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{description}</Text>
      </View>
    </View>
  );
};

export default About