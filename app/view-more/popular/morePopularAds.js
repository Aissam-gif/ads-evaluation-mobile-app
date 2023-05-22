import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import {Stack, useRouter, useSearchParams} from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
import { COLORS, SIZES, icons } from '../../../constants'
import NormalAdCard from '../../../components/common/cards/normal/NormalAdCard'
import ScreenHeaderBtn from '../../../components/common/header/ScreenHeaderBtn'
import styles from '../../../styles/search'
import { SERVER_URL } from '../../../utils'


const MorePopularAds = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null)

    const handleSearch = async () => {
        setSearchLoader(true)
        setSearchResult([])

        const userId = 1
        try {
            const options = {
                method: "GET",
                url: SERVER_URL+"User/Reviwed/"+userId,
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
                    <Text style={styles.searchTitle}>Popular Ads</Text>
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

export default MorePopularAds
