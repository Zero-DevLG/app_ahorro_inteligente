import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '../utils'
import {  GoalsScreen } from '../screens/Goals/GoalsScreen';
import { AddGoalScreen } from '../screens/Goals/AddGoalScreen';

const Stack = createNativeStackNavigator();

export function GoalsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.goals.Goals}
                component={ GoalsScreen }
                options={{  title: "Mis metas" }}
            />

            <Stack.Screen
                name={ screen.goals.addGoals }
                component={ AddGoalScreen}
                options={{  title: "Añadir una nueva meta"  }}
            
            />
        </Stack.Navigator>
    );
}
