import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Jobs from './pages/Jobs';
import FavoritesJobs from './pages/FavoriteJobs';
import JobDetail from './pages/JobDetail';

import FavoriteJobProvider from './context/FavoriteJobProvider';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const JobsStackNavigator = () => {
  return (
    <Stack.Navigator
      // screenOptions={{headerShown: false}}
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Jobs">
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{headerTintColor: '#ef5451', title: 'İş ilanları'}}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{headerTintColor: '#ef5451', title: 'Detaylar'}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <FavoriteJobProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Jobs"
          useLegacyImplementation
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Job"
            component={JobsStackNavigator}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="FavoritesJobs"
            component={FavoritesJobs}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavoriteJobProvider>
  );
};

export default Router;
