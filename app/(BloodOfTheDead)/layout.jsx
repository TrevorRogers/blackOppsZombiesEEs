import React from 'react'

const BloodLayout = () => {
  return (
    <>
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
    </Stack>

  </>
  )
}

export default BloodLayout