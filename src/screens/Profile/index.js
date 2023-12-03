import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { HambergerMenu, Setting, Setting2, Edit } from 'iconsax-react-native';
import React from 'react';
import { ProfileData, BeritaList, GaleriList } from '../../../data';
import { ItemBookmark, ItemGaleri, ItemPostingan } from '../../components';
import { fontType, colors } from '../../assets/theme';
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

const data = BeritaList.slice(5);
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', backgroundColor: 'grey', padding: 10, borderRadius: 20 }}>bntg.ar</Text>
        <HambergerMenu color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{ gap: 15, alignItems: 'center' }}>
          <Image
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
            }}
            resizeMode={'cover'}
          />
          <View style={{ gap: 5, alignItems: 'center' }}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>
              Member since {ProfileData.createdAt}
            </Text>
          </View>
          {/* <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ alignItems: 'center', gap: 5 }}>
              <Text style={profile.sum}>{ProfileData.blogPosted}</Text>
              <Text style={profile.tag}>Posted</Text>
            </View>
            <View style={{ alignItems: 'center', gap: 5 }}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.following)}
              </Text>
              <Text style={profile.tag}>Following</Text>
            </View>
            <View style={{ alignItems: 'center', gap: 5 }}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.follower)}
              </Text>
              <Text style={profile.tag}>Follower</Text>
            </View>
          </View> */}
        </View>
        <View style={{ marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Share Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10, gap: 20, alignItems: 'center' }}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 16, fontWeight: 'bold', borderBottomColor: 'black', borderBottomWidth: 3, }}>Abadikan Momen Seni Anda</Text>
          {GaleriList.map((item, index) => (
            <ItemPostingan item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  
  header: {
    paddingHorizontal: 24,
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
  },
});
const profile = StyleSheet.create({
  pic: { width: 100, height: 100, borderRadius: 50 },
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize'
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});