import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens/Dashboard/DashboardScreen';
import { screen } from '../utils'



const Stack = createNativeStackNavigator();

export function DashboardStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.dashboard.Dashboard}
                component={DashboardScreen}    
                option={{  title: "Dashboard"  }}   
            />
             
        </Stack.Navigator>
    );
   
}