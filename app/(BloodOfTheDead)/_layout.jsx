import React from 'react'
import {Stack} from 'expo-router'

const bloodLayout = () => {
  return (
    <Stack>
    <Stack.Screen
      name="BloodStep0"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="BloodStep1"
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="BloodStep2"
      options={{
        headerShown: false,
      }}
    />
        <Stack.Screen
      name="BloodStep3"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
  )
}

export default bloodLayout