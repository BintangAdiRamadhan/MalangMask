import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Receipt21, Clock, Message, Calendar, Notification } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const ItemBookmark = ({ item, onPress, variant }) => {
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
              <Text style={beritaSeniRupa.cardTitle}>{item.title}</Text>
            </View>
            <Notification
              size={24}
              variant="Linear"
              color={'white'}
            />
          </View>
          <View style={beritaSeniRupa.cardInfo}>
            <Calendar
              size={15}
              variant="Linear"
              color={'white'}
            />
            <Text style={beritaSeniRupa.cardText}>{item.tanggal}</Text>
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

export default ItemBookmark;
const beritaSeniRupa = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: '#353a3b',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.white(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: 'white',
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