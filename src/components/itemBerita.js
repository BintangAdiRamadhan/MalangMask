import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import { Clock, Like, Like1, Receipt21 } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';

const ItemBerita = ({ item }) => {
    return (
        <View style={beritaSeniRupa.listCard}>
            <View style={beritaSeniRupa.cardItem}>
                <Image
                    style={beritaSeniRupa.cardImage}
                    source={{
                        uri: item.image,
                    }}
                />
                <View style={beritaSeniRupa.cardContent}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ gap: 5, width: '70%' }}>
                            <Text style={beritaSeniRupa.cardCategory}>{item.kategori}</Text>
                            <Text style={beritaSeniRupa.cardTitle}>{item.title}
                            </Text>
                        </View>
                    </View>
                    <View style={beritaSeniRupa.cardInfo}>
                        <Clock
                            size={10}
                            variant="Linear"
                            color={colors.grey(0.6)}
                        />
                        <Text style={beritaSeniRupa.cardText}>05 Des 1970</Text>
                        {/* <Message
            size={10}
            variant="Linear"
            color={colors.grey(0.6)}
          />
          <Text style={beritaSeniRupa.cardText}>89</Text> */}
                    </View>
                </View>
            </View>

        </View>
    );
};
export default ItemBerita;
const beritaSeniRupa = StyleSheet.create({
    listCard: {
        paddingVertical: 10,
    },
    cardItem: {
        backgroundColor: 'rgba(168, 107, 71, 0.05)',
        flexDirection: 'row',
        borderRadius: 10,
    },
    cardCategory: {
        color: 'rgba(168, 107, 71, 1)',
        fontSize: 10,
        fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
    },
    cardText: {
        fontSize: 10,
        fontFamily: fontType['Pjs-Medium'],
        color: 'rgba(168, 107, 71, 0.6)',
    },
    cardImage: {
        width: 100,
        height: 'auto',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    cardInfo: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    cardContent: {
        gap: 10,
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 15,
        flex: 1,
        paddingVertical: 10,
    },
});