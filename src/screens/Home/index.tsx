import { View, Text } from "react-native"
import { useFeatureFlag } from 'configcat-react'


import { styles } from "./styles"



export const Home = () => {
    const { value: showPromotionalBanner, loading } = useFeatureFlag('promotionalBanner', false);

    if(loading) {
        return <Text>Feature is Loading...</Text>
    }
    return( 
    <View style={styles.container}>
        <Text style={styles.title}>Feature Flags</Text>


        {
           showPromotionalBanner && <View style={styles.banner}><Text>This is a feature</Text></View> 
        }
        
    </View>
    )
}