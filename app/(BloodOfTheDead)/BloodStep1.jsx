  import React from 'react'
  import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { router} from 'expo-router'


  const BloodStep1 = () => {
    return (
        <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
        <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>Blood Of The Dead</Text>
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Step 1</Text>
        </View>
        <Text style={{color: 'orange', fontSize: 25, margin: 20}}>Brutus</Text>
          
            <Text style={{color: 'white', margin: 20, fontSize: 30}}>
    Knife the wall heading up the stairs to the wardens Room with the spoon.  
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            {/* <Image source={{uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/4/47/Blood_of_Dead_Easter_Egg_25.JPG?width=640'}}/> */}
            <Text style={{color: 'white', margin: 20, fontSize: 30}}>
    Then head to the number pad in the tunnels and enter the code 666 to spawn a Burtus
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            <Text style={{color: 'white', margin: 20, fontSize: 30}}>
    Lead the Brutus to the wall that was kinfed previously to unlock the wardens chamber
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            <View style={{border: '1px solid orange', margin: 10}}>
            <FlatList
              data={[
                { key: '- Obtain the Spectral Sheid' },
                { key: '- Unlock Pack-a-Punch' },
                { key: '- Obtain Hells Retriever' },
                { key: '- Obtain the Blundergat' },
                { key: '- Obtain the Spoon' },
                { key: '- Upgrade to the Magmagat (optional)' },
                { key: '- Upgrade to the golden Spork (optional)' },
                { key: '- Upgrade the sheild (optional)' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, marginTop: 10}}>{item.key}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity 
          onPress={() => router.push('/BloodStep0')}
          style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
            <Text style={{color: 'black', fontSize: 25, margin: 8}}>Previous</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', margin: 20, fontSize: 20}}>Step 1</Text>
          <TouchableOpacity 
          onPress={() => router.push('/BloodStep2')}
          style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
            <Text style={{color: 'black', fontSize: 25, margin: 8, marginLeft: 20, marginRight: 20}}>Next</Text>
          </TouchableOpacity>
        </View>
       </SafeAreaView>
    )
  }
  
  export default BloodStep1