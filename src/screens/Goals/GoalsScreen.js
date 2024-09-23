import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";

import { screen } from "../../utils";


export function GoalsScreen(props){
    
    const { navigation } = props;
    
    const goToAddGoal = () => {
        navigation.navigate(screen.goals.addGoals );
    }

    return(
        <View>
            <Text>
                Sección de metas
            </Text>

            <Button title="Crear nueva meta" onPress={goToAddGoal} />
        </View>
    )
}