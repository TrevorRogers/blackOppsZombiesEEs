import React from 'react'
import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { router} from 'expo-router'
import eggBackground from '../../assets/images/eggsBackground.png'

const BloodStep0 = () => {
  return (
    <ImageBackground source={eggBackground} style={{width: '100%', height: '100%', tintColor: 'cyan'}} blurRadius={4} >
    <SafeAreaView  style={{backgroundColor: 'rgba(0,0,0, 0.8)', flex: 1, margin: 0.5 }} 
    
    >
    <ScrollView >
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color: 'white', fontSize:35, margin: 10}}>Blood Of The Dead</Text>
      <TouchableOpacity  style={{  backgroundColor: 'black', borderRadius: 3, border: 'solid 1px orange', margin: 10 }}
      onPress={() => router.push('/BO4')}
      >
        <Text style={{color: 'white', fontSize: 20, margin: 10, textAlign: 'center'}}>Exit</Text>
      </TouchableOpacity>
      </View>
    <View >
      <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Starting rounds</Text>
    </View>
    <Text style={{color: 'orange', fontSize: 25, margin: 20}}>Prerequisites</Text>
      
        <Text style={{color: 'lightgrey', margin: 20, fontSize: 30, fontWeight: 150}}>
During waves 1 to 17, you cannot complete the main Easter Egg, giving you plenty of time to work on obtaining the list of items below.
        </Text>
        <View style={{border: '1px solid orange', margin: 10}}>
        <FlatList
          data={[
            { key: '- Obtain the Spectral Shield' },
            { key: '- Unlock Pack-a-Punch' },
            { key: '- Obtain Hells Retriever' },
            { key: '- Obtain the Blundergat' },
            { key: '- Obtain the Spoon' },
            { key: '- Upgrade to the Magmagat (optional)' },
            { key: '- Upgrade to the golden Spork (optional)' },
            { key: '- Upgrade the shield (optional)' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, color: 'lightgrey', marginLeft: 10, marginTop: 10}}>{item.key}</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity 
      onPress={() => router.push('/BO4')}
      style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'black', borderRadius: 3, border: 'solid 1px orange'}}>
        <Text style={{color: 'white', fontSize: 25, margin: 8}}>Previous</Text>
      </TouchableOpacity>
      <Text style={{color: 'white', margin: 20, fontSize: 20}}>1-17</Text>
      <TouchableOpacity 
      onPress={() => router.push('/BloodStep1')}
      style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'black', borderRadius: 3, border: 'solid 1px orange'}}>
        <Text style={{color: 'white', fontSize: 25, margin: 8, marginLeft: 20, marginRight: 20}}>Next</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
   </ImageBackground>
  )
}

export default BloodStep0