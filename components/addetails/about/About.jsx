import React from 'react'
import { View, Text, Image } from 'react-native'


import styles from './about.style'

const About = ({ image_url, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Ad : </Text>
      
      <View style={styles.imageContainer}>
        <View style={styles.logoBox}>
            <Image source={{uri: image_url}} style={styles.logoImage}/>
        </View>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{description}</Text>
      </View>
    </View>
  );
};

export default About