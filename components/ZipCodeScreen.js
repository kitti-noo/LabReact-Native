import React from 'react';
import { StyleSheet , ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Phatthalung', code: '93000' },
    { place: 'Phuket', code: '83000'}
     
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight activeOpacity={0.8} 
    underlayColor='#00D3FF' onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.flex}>
            <Text style = {styles.text }>{place}</Text>
            <Text style = {styles.text }>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
             <ImageBackground source={require('../back.jpg')} style={styles.backdrop} >
            <FlatList 
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    flex: {   
        display: 'flex',    
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight:20,
        margin:30
        
        
    },
    text: {
        color: 'black',
        textAlign: 'center',
       
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    
   
})
