import React from "react"
import { StyleSheet, ScrollView,Modal,Pressable, Text, View, StatusBar, FlatList } from 'react-native';
import estilos from "../../estilos";
import Item from "./Item";


console.log("teste")
const data = [
    {
        id: 1,
        title: "Service 1",
        price: 99.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl."
    },
    {
        id: 2,
        title: "Service 2",
        price: 99.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl."
    },
    {
        id: 3,
        title: "Service 3",
        price: 99.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nisl nunc eget nisl."
    },
]

const Services = () => {
    return(

        <>
        <View style={styles.container}>
            <StatusBar />
            <Text>Services</Text>
            <FlatList 
                data={data}
                renderItem={({item}) => <Item { ...item }/>}
                keyExtractor={({id}) => String(id)}
                />
        </View>
        <View style={styles.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.quantidade}>Quantidade: </Text>
                </View>
            </View>

        </View>
        </>
    )

}

export default Services;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  