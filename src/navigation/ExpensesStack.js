import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExpensesScreen } from '../screens/Expenses/ExpensesScreen';
import { screen } from '../utils'



const Stack = createNativeStackNavigator();

export function ExpensesStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.expenses.expenses}
                component={ExpensesScreen}    
                option={{  title: "Mis gastos"  }}   
            />
             
        </Stack.Navigator>
    );
   
}