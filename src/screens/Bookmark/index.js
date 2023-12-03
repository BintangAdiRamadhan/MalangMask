import { StyleSheet, Text, View, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Add, Edit, Notification } from 'iconsax-react-native';
import { BeritaList, NotifikasiList } from '../../../data';
import { ItemBerita, ItemBookmark } from '../../components';
import { fontType, colors } from '../../assets/theme';
import axios from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
const Bookmark = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://656c47ace1e03bfd572e23cc.mockapi.io/Post',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifikasi</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemBookmark item={item} key={index} />)
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddPos")}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
  },
});