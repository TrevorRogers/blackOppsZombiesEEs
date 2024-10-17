import React from 'react'
import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import { router} from 'expo-router'
import { CheckBox } from 'react-native-web'
import { useState } from 'react'

const BloodStep3 = () => {
  const [isChecked, setChecked] = useState(false)

  return (
      <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
      <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center', margin: 20}}>Blood Of The Dead</Text>
        <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Step 3</Text>
      </View>
      <Text style={{color: 'orange', fontSize: 35, margin: 20}}>Bird</Text>
        
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          Once you have placed the stone on the map, the Kronorium will now spawn in the right most corner of the room. Interact with the book and it will spawn a glowing blue bird that will steal the Kronorium. 
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          {/* <Image source={{uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-black-ops-4/4/47/Blood_of_Dead_Easter_Egg_25.JPG?width=640'}}/> */}
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          For the next three rounds you will be tasked with finding the bird once every round. Finding the bird every round is no easy task, as you can only see and hear the bird by using your Shield's vision ability and listening to the audio cues to track it's location. The closer you are to the bird, the louder the sound will be.
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          <Text style={{color: 'lightgrey', margin: 20, fontSize: 30}}>
          Once you find the bird, you will want to use your Shield's Spirit Blast ability to attack the bird. You will need to repeat this step three times. 
          </Text>
          <View style={{border: '1px solid orange', margin: 10, width: 300, height: 200, alignSelf: 'center'}}>
            <Text style={{color:'white', display: 'flex', justifyContent: 'center', margin: 70, fontSize: 30}}>Image</Text>
          </View>
          <TouchableOpacity style={{  backgroundColor: 'black',
        borderRadius: 30,
        width: '50%',
        display: 'flex',
        alignSelf: 'center',
        border: '1px solid orange',
        margin: 20,}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20, margin: 10}}>Bird Locations Here</Text>
          </TouchableOpacity>
          <View style={{border: '1px solid orange', margin: 10}}>
          <FlatList
            data={[
              { key: '- hold square on the book' },
              { key: '- Fing the bird 3 times' },
        
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
        onPress={() => router.push('/BloodStep2')}
        style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
          <Text style={{color: 'black', fontSize: 25, margin: 8}}>Previous</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', margin: 20, fontSize: 20}}>Step 3</Text>
        <TouchableOpacity 
        onPress={() => router.push('/BloodStep4')}
        style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
          <Text style={{color: 'black', fontSize: 25, margin: 8, marginLeft: 20, marginRight: 20}}>Next</Text>
        </TouchableOpacity>
      </View>
     </SafeAreaView>
  )
}

export default BloodStep3