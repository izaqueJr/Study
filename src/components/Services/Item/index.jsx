import React from "react";
import estilos from "./estilos";

import {Text, View} from "react-native";

export default function Item({title, description, price}) {
    return(
        <View style={estilos.informacao}>
            <Text style={estilos.nome}>{title}</Text>
            <Text style={estilos.descricao}>{description}</Text>
            <Text style={estilos.preco}>{price}</Text>
        </View>
    )
}