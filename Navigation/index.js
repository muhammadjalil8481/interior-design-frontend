import { View, Text } from "react-native";
import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import AccountNavigation from "./AccountNavigation";

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? <TabNavigation /> : <AccountNavigation />;
};

export default Navigation;
