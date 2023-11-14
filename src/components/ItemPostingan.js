import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Like, Like1, Receipt21 } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';
import {useNavigation} from '@react-navigation/native';

const ItemGaleri = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ ...itemKategori.cardItem, marginLeft: 0 }}onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>



      <ImageBackground
        style={itemKategori.cardImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
        source={{
          uri: item.image,
        }}
      >
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default ItemGaleri;

const itemKategori = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // padding: 15,
    position: 'absolute',
    left: 5,
    bottom: 5,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
})