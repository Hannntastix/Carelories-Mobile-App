import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { TargetProvider } from "./TargetContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // atau komponen loading
  }

  return (
    <TargetProvider>
      <Stack screenOptions={{
        headerShown: false 
      }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </TargetProvider>
  );
}