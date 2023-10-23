import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Like, Like1, Receipt21 } from 'iconsax-react-native';
import { fontType, colors } from '../assets/theme';
const ItemHorizontal = ({ item, variant, onPress }) => {
  return (
    <View style={{ ...itemKategori.cardItem, marginLeft: 0 }}>
      <ImageBackground
        style={itemKategori.cardImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
        source={{
          uri: item.image,
        }}
      >
        <View style={itemKategori.cardContent}>
          <View style={itemKategori.textContainer}>
            <View>
              <TouchableOpacity onPress={onPress}>
                <Like1
                  color={'yellow'}
                  variant={variant}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {/* <Text style={itemKategori.cardTitle}>Wayang Kulit</Text> */}
            {/* <Text style={itemKategori.cardText}>Kerajinan yang terkenal hingga ke manca negara dan biasa dipakai pada pertunjukan</Text> */}
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};
const ItemGaleri = ({ data }) => {
  const [like, setLike] = useState([]);
  const toggleLike = itemId => {
    if (like.includes(itemId)) {
      setLike(like.filter(id => id !== itemId));
    } else {
      setLike([...like, itemId]);
    }
  };
  const renderItem = ({ item }) => {
    variant = like.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemHorizontal
        item={item}
        variant={variant}
        onPress={() => toggleLike(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ItemGaleri;
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
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
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
const itemKategori = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
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