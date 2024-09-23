import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from '@rneui/themed';


import { screen } from "../utils"
import { DashboardStack } from "./DashboardStack";
import { GoalsStack } from "./GoalsStack";
import { AccountStack } from "./AccountStack"
import { ExpensesStack } from "./ExpensesStack";
import { IncomeStack } from "./IncomeStack";


import { View, Text, Image, StyleSheet } from "react-native";





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
            headerShown: false,
             tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarStyle: { backgroundColor: '#E635A7' }, // Cambia el color de fondo
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })} >
            <Tab.Screen name={ screen.dashboard.tab } component={ DashboardStack } />
            <Tab.Screen name={ screen.goals.tab } component={ GoalsStack } />
            <Tab.Screen name={ screen.account.tab } component={ AccountStack } />
            <Tab.Screen name={ screen.expenses.tab } component={ ExpensesStack } />
            <Tab.Screen name={ screen.income.tab } component={ IncomeStack } />
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