import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    Review,
    ScreenHeaderBtn,
  } from "../../components";
  import { COLORS, icons, SIZES } from "../../constants";
  import useFetch from "../../hook/useFetch";

  const tabs = ["About", "Review"];

const AdDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch(params.id, {

      });

    const [activeTab, setActiveTab] = useState(tabs[0]);  
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        refreshing(true);
        refetch();
        refreshing(false);
    }, []);
    
    const displayTabContent = () => {
       
        switch(activeTab) {
            case "About":
                return (
                    <JobAbout image_url={data.image} description={data.description ?? "No data provided"}/>
                );
            case "Review" :
                return (
                    <Review/>
                )    
        }
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
            options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension='60%'
                    />
                ),
                headerTitle: data.operateur + " Advertisement",
                
            }}
        />
            <>
                <View>
                    {activeTab === "About" ? (
                        <Company 
                        adImage={data.image}
                        adTitle={data.title}
                        operatorName={data.operateur}
                        adDescription={data.description}
                        adVideoLink={data.videoLink}
                        adDate={data.date}
                    /> 
                    ) : (
                        <></>
                    )}
                </View>

                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something Went Wrong id.js Page</Text>
                    ) : data === undefined ? (
                        <Text>Data is unavailable</Text>
                    ) 
                    : (
                        <>

                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                             
                            <View style={{flex:1, alignItems:'center'}}>
                                 <JobTabs 
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                /> 
                            </View>

                            {displayTabContent()}
                         
                        </View>
                        </>
                    )}
                </ScrollView>
            </>

    
    </SafeAreaView>
  )
}

export default AdDetails