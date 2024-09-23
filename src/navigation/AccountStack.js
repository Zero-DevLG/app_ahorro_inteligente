import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from '../utils'
import { AccountScreen } from '../screens/Account/AccountScreen';
import { LoginScreen } from '../screens/Account/LoginScreen/LoginScreen';



const Stack = createNativeStackNavigator();

export function AccountStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.account.account}
                component={AccountScreen}    
                option={{  title: "Mi cuenta"  }}   
            />

            <Stack.Screen
                name={ screen.account.login }
                component={ LoginScreen }
                options={{  title: "Iniciar sesión"  }}
            
            />
             
        </Stack.Navigator>
    );
   
}