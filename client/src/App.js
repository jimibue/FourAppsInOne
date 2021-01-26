import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Things from "../../mobile/Things";
export default function App() {
  return (
    <NavigationContainer>
      <Things />
    </NavigationContainer>
  );
}
