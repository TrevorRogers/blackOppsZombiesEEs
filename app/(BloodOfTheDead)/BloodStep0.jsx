import React from 'react'
import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { router} from 'expo-router'

const BloodStep0 = () => {
  return (
    <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
    <ScrollView style={{backgroundColor: 'black'}}>
    <View style={{backgroundColor: 'black'}}>
      <Text style={{color: 'white', fontSize: 40, textAlign: 'center', margin: 10}}>Blood Of The Dead</Text>
      <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Starting rounds</Text>
    </View>
    <Text style={{color: 'orange', fontSize: 25, margin: 20}}>Prerequisites</Text>
      
        <Text style={{color: 'lightgrey', margin: 20, fontSize: 30, fontWeight: 150}}>
During waves 1 to 17, you cannot complete the main Easter Egg, giving you plenty of time to work on obtaining the list of items below.
        </Text>
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
      style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
        <Text style={{color: 'black', fontSize: 25, margin: 8}}>Previous</Text>
      </TouchableOpacity>
      <Text style={{color: 'white', margin: 20, fontSize: 20}}>1-17</Text>
      <TouchableOpacity 
      onPress={() => router.push('/BloodStep1')}
      style={{alignSelf: 'flex-end', margin: 15, backgroundColor: 'orange', borderRadius: 20}}>
        <Text style={{color: 'black', fontSize: 25, margin: 8, marginLeft: 20, marginRight: 20}}>Next</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default BloodStep0