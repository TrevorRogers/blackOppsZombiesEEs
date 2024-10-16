import React from 'react'
import { SafeAreaView, ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { router} from 'expo-router'

const BloodStep0 = () => {
  return (
   <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1}}>
    <View style={{backgroundColor: 'black'}}>
      <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>Blood Of The Dead</Text>
    </View>
    <ScrollView style={{backgroundColor: 'black'}}>
    <Text style={{color: 'orange', fontSize: 25, margin: 20}}>Prerequisites</Text>
      <View style={{border: '1px solid orange', margin: 10}}>
        <Text style={{color: 'white', margin: 20, fontSize: 30}}>
During waves 1 to 17, you cannot complete the main Easter Egg, giving you plenty of time to work on obtaining the list of items below.
        </Text>
        
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
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10}}>{item.key}</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
    <View>
      <TouchableOpacity 
     onPress={() => router.push("/BloodStep1")}
      style={{alignSelf: 'flex-end', margin: 20}}>
        <Text style={{color: 'white', fontSize: 25}}>Next</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default BloodStep0