import { Stack } from 'expo-router'

export default function RootLayout() {


  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(BloodOfTheDead)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }}/>
      </Stack>
    </>
  );
}
