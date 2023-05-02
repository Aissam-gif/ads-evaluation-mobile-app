import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const adsOperators = ["IAM", "INWI", "ORANGE"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeOperator, setActiveOperator] = useState('Full-Time'); 

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Aissam</Text>
        <Text style={styles.welcomeMessage}>Be The First To Review Ad</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput  style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => {setSearchTerm(text)}}
            placeholder='What are you looking for ?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

 
      <View style={styles.tabsContainer}>
        <FlatList 
          data={adsOperators}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeOperator, item)}
              onPress={() => {
                setActiveOperator(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeOperator, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
} 

export default Welcome