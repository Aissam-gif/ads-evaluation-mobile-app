import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import { COLORS, SIZES, icons, images } from '../../constants'
import {Stack, useRouter, useSearchParams} from 'expo-router'
import { NormalAdCard, ScreenHeaderBtn } from '../../components'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
import styles from '../../styles/search'
import { SERVER_URL } from '../../utils'

const OperatorSearch = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null)

    const adsOperators = ["","IAM", "INWI", "ORANGE"]

    const handleSearch = async () => {
        setSearchLoader(true)
        setSearchResult([])
        
        try {
            const options = {
                method: "GET",
                url: SERVER_URL+"Operateur/"+params.id,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                },
            }
    
            const response = await axios.request(options);
            const responseData = response; // Store the data in a separate variable        
            setSearchResult(responseData.data);
   
        } catch (error) {
            setSearchError(error)
        console.log(error)
    } finally {
        setSearchLoader(false)
    }
};

    useEffect(() => {
        handleSearch()
    }, [])

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.left} dimension="60%"
                    handlePress={() => router.back()}
                    />
                ),
               headerTitle: "",
            }}
        />

        <FlatList 
            data={searchResult}
            renderItem={({item}) => (
                <NormalAdCard 
                    item={item}
                    selectedAd={null}
                    handleCardPress={() => {
                        router.push(`/ad-details/${item.id}`)
                    }}
                />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{padding: SIZES.small, rowGap: SIZES.medium}}
            ListHeaderComponent={() => (
                <>
                <View style={styles.container}>
                    <Text style={styles.searchTitle}>{adsOperators[params.id]}</Text>
                    <Text style={styles.noOfSearchedJobs}>Operator Search</Text>
                </View>
                <View style={styles.loaderContainer}>
                    {searchLoader ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : searchError && (
                        <Text>Oops something went wrong</Text>
                    )}
                </View>
            </>
            )}
        />
    </SafeAreaView>
  )
}

export default OperatorSearch
