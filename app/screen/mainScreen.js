import { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import { Stack, useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';

import {COLORS, icons, images, SIZES} from '../../constants';
import {ReviewedAds, PopularAds, ScreenHeaderBtn, Welcome} from '../../components'
import Login from './login';


const MainScreen = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
        // Simulating authentication state
    useEffect(() => {
        // Check if user is logged in (e.g., by checking token in AsyncStorage)
        const checkLoginStatus = async () => {
        // Your authentication logic here
        const userToken = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(!!userToken);
      //  setIsLoggedIn(false);
        };

        checkLoginStatus();
    }, []);

    const handleLogin = async () => {
        // Perform login logic here
        // After successful login, set isLoggedIn to true and navigate to the main screen
        setIsLoggedIn(true);
        //router.push('/');
    };
    print("HELLO WORLDS")
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1, padding: SIZES.medium
                }}>
                    {isLoggedIn ? (
                        <>
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
                        </>
                    ) : (
                    <Login handleLogin={handleLogin} />
                    )}
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainScreen;