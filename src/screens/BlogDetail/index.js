import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Like1, Receipt21, Message, Share, More } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { NotifDetail } from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../assets/theme';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';
import { formatDate } from '../../utils/formatDate';

const BlogDetail = ({ route }) => {
  const { blogId } = route.params;
  const [iconStates, setIconStates] = useState({
    liked: { variant: 'Linear', color: colors.grey(0.6) },
    bookmarked: { variant: 'Linear', color: colors.grey(0.6) },
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://656c47ace1e03bfd572e23cc.mockapi.io/Post/${blogId}`,
      );
      setSelectedBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateEdit = () => {
    closeActionSheet()
    navigation.navigate('EditPos', { blogId })
  }
  const handleDelete = async () => {
    await axios.delete(`https://656c47ace1e03bfd572e23cc.mockapi.io/Post/${blogId}`)
      .then(() => {
        closeActionSheet()
        navigation.navigate('Bookmark');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={colors.grey(0.6)}
            variant="Linear"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openActionSheet}>
          <More
            color={colors.grey(0.6)}
            variant="Linear"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <Image
          style={styles.image}
          source={{
            uri: selectedBlog?.image,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>

        </View>
        <Text style={styles.date}>{formatDate(selectedBlog?.tanggal)}</Text>
        <Text style={styles.title}>{selectedBlog?.judul}</Text>
        <TouchableOpacity>
          <Text style={styles.date}>{selectedBlog?.deskripsi}</Text>
        </TouchableOpacity>
      </ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
        >
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};
export default BlogDetail;
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
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.blue(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    lineHeight: 20,
    marginTop: 15,
  },
});