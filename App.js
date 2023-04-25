import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons"
import Colors from './constants/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import Categories from './screens/CategoryScreen';
import CategoryData from './screens/CategoryData';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import ArticlesDetails from './screens/ArticleDetails';


const stack = createNativeStackNavigator();


function Navigator() {
  return (
    <stack.Navigator initialRouteName="cateories"
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: { backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "" },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }}
    >
      <stack.Screen name='cateories' component={Categories}
         
         options={({ navigation, route }) => ({
          // headerTitle: (props) => <LogoTitle {...props} />,
          // Add a placeholder button without the `onPress` to avoid flicker
          headerLeft: () => {

            return(
              <Ionicons
              style={{
                padding:10
              }}
            name="ios-menu-outline"
            size={30}
            onPress={() => {console.log("marked as favorite");
            navigation.toggleDrawer();
          }}
            color={Platform.OS === "android" ? "white" : Colors.primaryColor}
          />
            )
          }
        })}
   
      />

      <stack.Screen name='Article' component={ArticlesDetails} 
       options={{
        headerRight: () => {
          return(
            <Ionicons
          name="ios-star-outline"
          size={20}
          onPress={() => {console.log("marked as favorite");}}
          color={Platform.OS === "android" ? "white" : Colors.primaryColor}
        />
          )
        }
 
      }}
      />
      <stack.Screen name='categorydata' component={CategoryData}
      />
    </stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'All') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'ios-rocket' : 'ios-rocket';
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: { backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "" },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: 'gray',
        headerShown:false
      })
    }
  >
    <Tab.Screen name='All' component={Navigator} />
    <Tab.Screen name='Favourites' component={FavoritesScreen} 

options={{
   headerShown:true

}}
    
    />
  </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: { backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "" },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerShown:false
    }}
    >
      <Drawer.Screen name='Swahili Articles' component={TabNavigator}
      />
      <Drawer.Screen name='Filters' component={FiltersScreen}
      options={{
        headerShown:true
     
     }}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

