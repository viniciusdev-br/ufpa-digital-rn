import React from "react";
import { View, Text, StyleSheet, ImageBackground, Drawer} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconG from 'react-native-vector-icons/MaterialIcons'

import Logo from '../static/images/logo-ufpa-white.svg';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export function DrawerContent(props) {
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View>
                    <ImageBackground source={require('../static/images/image-background.png')} resizeMode='cover' style={styles.img}>
                        <Logo width={100} height={120}/>
                        <Text style={styles.text}><B>UFPA</B> Digital</Text>
                    </ImageBackground>

                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="home" color={ '#0F3F68'} size={size} focused={true}/>
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="newspaper-o" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Notícias"
                            onPress={() => {props.navigation.navigate('Notifications')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="suitcase" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Oportunidades"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="mortar-board" color={ '#0F3F68'} size={size}/>
                            )}
                            label="SIGAA UFPA"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <IconG name="local-restaurant" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Restaurante Universitário"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="map-o" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Mapa"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="forumbee" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Rádio Web UFPA"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <Icon name="phone" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Contatos"
                            onPress={() => {props.navigation.navigate('Contatos')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <IconG name="settings" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Configurações"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => (
                                <IconG name="info" color={ '#0F3F68'} size={size}/>
                            )}
                            label="Sobre"
                            onPress={() => {props.navigation.navigate('Sobre')}}
                        />   
                </View>
            </DrawerContentScrollView>
        </View>
    )

    
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
        },
        img: {
            width: '100%',
            backgroundColor: '#0F3F68',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
        },
        text: {
            color: 'white',
            fontSize: 19,
            lineHeight: 84,
            textAlign: "center",
        },
        drawerSection: {
            marginTop: 15,
        }
    });