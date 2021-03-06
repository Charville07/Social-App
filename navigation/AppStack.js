import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Bridgette Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: '',
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        const hideOnScreens = ['Chat'];
        if(hideOnScreens.indexOf(routeName) > -1) return false;
        return true;
    }
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#2e64e5',
        }}>
        <Tab.Screen
            name="Home"
            component={FeedStack}
            options={({route}) => ({
            tabBarLabel: 'Home',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
                />
            ),
            })}
        />
        <Tab.Screen
            name="Messages"
            component={MessageStack}
            options={({route}) => ({
            tabBarVisible: getTabBarVisibility(route, 0),

            tabBarIcon: ({color, size}) => (
                <Ionicons
                name="chatbox-ellipses-outline"
                color={color}
                size={size}
                />
            ),
            })}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" color={color} size={size} />
            ),
            }}
        />
        </Tab.Navigator>
    );
};

export default AppStack;
