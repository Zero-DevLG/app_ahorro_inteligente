import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from '@rneui/themed';
import { DashboardScreen } from "../screens/DashboardScreen"
import { GoalsScreen } from "../screens/GoalsScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { ExpensesScreen } from "../screens/ExpensesScreen";
import { IncomeScreen } from "../screens/IncomeScreen";
import { View, Text, Image, StyleSheet } from "react-native";

import { screen } from "../utils"

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    navbar: {
        padding: 20,
        backgroundColor: 'blue'
    },
   
})

export function AppNavigation(){
    return(
        <Tab.Navigator style = { styles.navbar} screenOptions={({ route })=>({
             tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarStyle: { backgroundColor: '#E635A7' }, // Cambia el color de fondo
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })} >
            <Tab.Screen name={ screen.dashboard.tab } component={ DashboardScreen } />
            <Tab.Screen name={ screen.goals.tab } component={ GoalsScreen } />
            <Tab.Screen name={ screen.account.tab } component={ AccountScreen } />
            <Tab.Screen name={ screen.expenses.tab } component={ ExpensesScreen } />
            <Tab.Screen name={ screen.income.tab } component={ IncomeScreen } />
        </Tab.Navigator>
    )
}

function screenOptions(route, color, size){
    let iconName;
    let iconType;

    if(route.name === screen.goals.tab ){
        iconName = "piggy-bank";
        iconType = "font-awesome-5";
    }

    if(route.name === screen.dashboard.tab ){
        iconName = "chart-line";
        iconType = "font-awesome-5";
    }

    if(route.name === screen.account.tab ){
        iconName = "user-alt";
        iconType = "font-awesome-5";
    }

    if(route.name === screen.expenses.tab ){
        iconName = "coins";
        iconType = "font-awesome-5";
    }

    if(route.name === screen.income.tab ){
        iconName = "hand-holding-usd";
        iconType = "font-awesome-5";
    }
    
    return <Icon 
        type= { iconType }
        name={ iconName} 
        color={color} 
        size={ size} 
    />;
}