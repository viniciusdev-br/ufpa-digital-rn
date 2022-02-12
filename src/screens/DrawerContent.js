import React from "react";
import { View, Text, StyleSheet, ImageBackground, Drawer} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Logo from '../static/images/logo-ufpa-white.svg';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export function DrawerContent(props) {
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View>
                    <ImageBackground source={require('../static/images/image-background.png')} resizeMode='cover' style={styles.img}>
                        <Logo width={100} height={100}/>
                        <Text style={styles.text}><B>UFPA</B> Digital</Text>
                    </ImageBackground>

                    

                        <DrawerItem 
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            label="Notícias"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            label="Oportunidades"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                    

                </View>
            </DrawerContentScrollView>
        </View>
    )

    
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
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