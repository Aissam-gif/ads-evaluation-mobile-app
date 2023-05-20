import { useEffect, useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import { Stack, useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';


import {COLORS, icons, images, SIZES} from '../constants';
import {ReviewedAds, PopularAds, ScreenHeaderBtn, Welcome} from '../components'
import Login from './screen/login';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
        // Simulating authentication state
    useEffect(() => {
        // Check if user is logged in (e.g., by checking token in AsyncStorage)
        const checkLoginStatus = async () => {
        // Your authentication logic here
        // TODO: ASYNC STORAGE IS RESPONSIBLE FOR NOT WORKING 
        const userToken = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(!!userToken);
     //    setIsLoggedIn(false);
     console.log(isLoggedIn);
        };

        checkLoginStatus().catch((error) => {
            console.log('ERROR : ' + error)
        })
    }, [])
    const handleLogin = async () => {
        // Perform login logic here
        // After successful login, set isLoggedIn to true and navigate to the main screen
        setIsLoggedIn(true);
        //router.push('/');
    };

    const handleLogOut = async () => {
        setIsLoggedIn(false);
        await AsyncStorage.setItem('userToken', "")
        window.location.reload(false)
    }


    if (isLoggedIn) {
        return (
            <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.logout} dimension="60%" handlePress={handleLogOut}/>
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1, padding: SIZES.medium
                }}>
            
                             <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick = {() => {
                           if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                           }
                        }}
                        />
                        <PopularAds />
                        <ReviewedAds />
                     
                       
                    
                   
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerTitle: "Login"
                }}
            />

                <Login handleLogin={null} />
                     
        </SafeAreaView>
           
        )
    }
   
    
}

export default Home;