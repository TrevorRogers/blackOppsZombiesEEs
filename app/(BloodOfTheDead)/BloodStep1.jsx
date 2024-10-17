  import React from 'react'
  import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import { router} from 'expo-router'
import { CheckBox } from 'react-native-web'
import { useState } from 'react'


  const BloodStep1 = () => {

    const [isChecked, setChecked] = useState(false)

    return (
        <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
        <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', fontSize: 40, textAlign: 'center', margin: 20}}>Blood Of The Dead</Text>
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Step 1</Text>
        </View>
        <Text style={{color: 'orange', fontSize: 35, margin: 20}}>Jumping Brutus</Text>
          
            <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
    Knife the wall heading up the stairs to the wardens Room with the spoon.  
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            {/* <Image source={{uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/4/47/Blood_of_Dead_Easter_Egg_25.JPG?width=640'}}/> */}
            <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
    Then head to the number pad in the tunnels and enter the code 666 to spawn a Jumping Burtus
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
    Lead the Brutus to the wall that was kinfed previously to unlock the wardens chamber
            </Text>
            <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
              <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
            </View>
            <View style={{border: '1px solid orange', margin: 10}}>
            <FlatList
              data={[
                { key: '- Knife the wall with the spoon' },
                { key: '- Unlock Pack-a-Punch' },
                { key: '- Obtain Hells Retriever' },
          
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 20, flexDirection: 'row' }}>
                   
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, marginTop: 10}}>{item.key}</Text>
                    <CheckBox style={{alignSelf: 'end', margin: 20}} value={isChecked} onValueChange={setChecked}/>
                    
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