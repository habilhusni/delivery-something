import React from "react";

import { StackNavigator } from "react-navigation";

import Maps from "./Maps";

const App = StackNavigator(
  {
    Maps: { screen: Maps }
  },
  {
    headerMode: "none"
  }
);

export default App;
