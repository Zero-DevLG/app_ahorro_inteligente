
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '../utils'
import { IncomeScreen } from '../screens/Income/IncomeScreen';



const Stack = createNativeStackNavigator();

export function IncomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.income.income}
                component={ IncomeScreen}    
                option={{  title: "Mis ingresos"  }}   
            />
             
        </Stack.Navigator>
    );
   
}