import React from 'react'
import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import { router} from 'expo-router'
import { CheckBox } from 'react-native-web'
import { useState } from 'react'

const BloodStep2 = () => {
  const [isChecked, setChecked] = useState(false)

  return (
      <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
      <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center', margin: 20}}>Blood Of The Dead</Text>
        <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Step 2</Text>
      </View>
      <Text style={{color: 'orange', fontSize: 35, margin: 20}}>Red Stone</Text>
        
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          Inside this room, you will find a body that is draped with a cloth. You will then want to interact with the small red stone that can be found on the nearby desk within the room.  
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          {/* <Image source={{uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/4/47/Blood_of_Dead_Easter_Egg_25.JPG?width=640'}}/> */}
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          Once you have picked up the stone, interact with the lever, which will reveal the body to be the corpse of the Warden.
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          Now that you have collected the stone, make your way to Richtofen's Lab, where you will need to place the red stone on the map that is located on the left wall of the Lab.
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          <View style={{border: '1px solid orange', margin: 10}}>
          <FlatList
            data={[
              { key: '- pick up the red stone' },
              { key: '- hold square on the warden' },
              { key: '- place stone in the map' },
        
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
        onPress={() => router.push('/BloodStep1')}
        style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
          <Text style={{color: 'black', fontSize: 25, margin: 8}}>Previous</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', margin: 20, fontSize: 20}}>Step 2</Text>
        <TouchableOpacity 
        onPress={() => router.push('/BloodStep3')}
        style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
          <Text style={{color: 'black', fontSize: 25, margin: 8, marginLeft: 20, marginRight: 20}}>Next</Text>
        </TouchableOpacity>
      </View>
     </SafeAreaView>
  )
}

export default BloodStep2