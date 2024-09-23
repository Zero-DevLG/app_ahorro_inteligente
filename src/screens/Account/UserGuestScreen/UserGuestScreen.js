import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Button, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils'


import { styles } from './UserGuestScreen.styles';


export default function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLogin = ()=>{
    navigation.navigate(screen.account.login);
  }


  return (
    <ScrollView centerContent={true} style={styles.content}>
        <Image style = { styles.image}
          source={require('../../../../assets/img/banner_p.png')}
        />
        <Text style={ styles.title}> Consulta tu perfil para más funciones !!! </Text>
        <Text style={ styles.description }>No importa si estás comenzando o si ya tienes experiencia, Ahorro Inteligente te ayuda a tomar el control de tu futuro financiero de manera sencilla y eficiente.</Text>

        <Button title="Ingresar a tu perfil" onPress={ goToLogin } buttonStyle= { styles.btnStyle }></Button>

    </ScrollView>
  )
}