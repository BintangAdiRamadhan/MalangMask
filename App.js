import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, Alert, ImageBackground, TextInput, Button } from 'react-native';
import { Category, SearchNormal, Receipt21, Clock, Message, ArrowRight2, } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = (text) => {
    setSearchText(text);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleProfilePress = () => {
    toggleModal();
  };

  const handleEditProfile = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan edit profil di sini
  };

  const handleLogout = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan logout di sini
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageBanner}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>MalanganMask</Text>
            </View>
            <View style={styles.notificationContainer}>
              <Category size="32" color="#000000"/>
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfilePress}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/564x/d5/0a/7d/d50a7d1dbeee7f1988bb2c293629a3da.jpg',
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Hallo,Gimana Kabarmu ?
            </Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 10, }}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Topeng terpopuler"
                onChangeText={handleSearchPress}
                value={searchText}
                placeholderTextColor="black"
              />
              <View style={styles.searchButtonContainer}>
                <TouchableOpacity style={styles.searchButton}>
                <SearchNormal size="35" color="#000000"/>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
        <GaleriTopengKreatif/>
        <KisahBudayaTopengMalang/>
        <BelajarTopengMalang />
        <BeritaDanAcara />
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profil Anda</Text>
              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={styles.modalItem}>Edit Profil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.modalItem}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalItem}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  );
};

const GaleriTopengKreatif = () => {
  return (
    <View style={styles.headerSeniPopuler}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Galeri Topeng Kreatif</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...itemKategori.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemKategori.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/9c/24/c0/9c24c0a1cd864ad5c1be7842b9c16ea3.jpg',
              }}
            >
              <View style={itemKategori.cardContent}>
                <View style={itemKategori.textContainer}>
                  {/* <Text style={itemKategori.cardTitle}>Wayang Kulit</Text> */}
                  {/* <Text style={itemKategori.cardText}>Kerajinan yang terkenal hingga ke manca negara dan biasa dipakai pada pertunjukan</Text> */}
                </View>

              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemKategori.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemKategori.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/736x/43/ac/80/43ac806d3033194379922f1d77d48397.jpg',
              }}
            >
              <View style={itemKategori.cardContent}>
                <View style={itemKategori.textContainer}>
                  {/* <Text style={itemKategori.cardTitle}>Wayang Kulit</Text> */}
                  {/* <Text style={itemKategori.cardText}>Kerajinan yang terkenal hingga ke manca negara dan biasa dipakai pada pertunjukan</Text> */}
                </View>

              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemKategori.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemKategori.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/61/29/36/612936c0e0d9ecfa63680b76cef6e861.jpg',
              }}
            >
              <View style={itemKategori.cardContent}>
                <View style={itemKategori.textContainer}>
                  {/* <Text style={itemKategori.cardTitle}>Wayang Kulit</Text> */}
                  {/* <Text style={itemKategori.cardText}>Kerajinan yang terkenal hingga ke manca negara dan biasa dipakai pada pertunjukan</Text> */}
                </View>

              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const KisahBudayaTopengMalang = () => {
  return (
    <View style={styles.headerSeniPopuler}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Kisah Budaya Topeng</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...itemSeniPopuler.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/33/4d/7d/334d7dffc273c5841ac74d7aade1991f.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Grebek Singhasari</Text>
                  <Text style={itemSeniPopuler.cardText}>Salah seorang Penari Topeng Malangan bersiap-siap sebelum memulai pertunjukan. </Text>
                </View>

              </View>
            </ImageBackground>
          </View>
          <View style={itemSeniPopuler.cardItem}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/28/57/eb/2857eb805c48a30b73d667381be2ef97.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Wayang Topeng</Text>
                  <Text style={itemSeniPopuler.cardText}>Wayang Topeng (also known as Wayang Wong) is a dance drama that uses masks (topeng) and was originally aristocratic entertainment</Text>
                </View>
                {/* <View style={itemSeniPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemSeniPopuler.cardItem}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/d0/cc/b5/d0ccb587286fe8002b728ef71a497488.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Javanese Mask Dance</Text>
                  <Text style={itemSeniPopuler.cardText}>Indonesian Cultural Mask - Festival Topeng Nusantara, Cirebon, West java</Text>
                </View>
                {/* <View style={itemSeniPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const BelajarTopengMalang = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Belajar Topeng </Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/ca/a7/52/caa7526b8c44d74c80f6141a7b0fe643.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Membentuk Wajah Topeng
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/d8/49/b5/d849b564bf6d8308253d5f81c88f56b7.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Mengecat topeng 
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};


const BeritaDanAcara = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Berita Dan Acara</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      <View style={beritaSeniRupa.listCard}>
        <View style={beritaSeniRupa.cardItem}>
          <Image
            style={beritaSeniRupa.cardImage}
            source={{
              uri: 'https://i.pinimg.com/564x/ab/20/3c/ab203cd4e0d38be3d90194308c46bfe6.jpg',
            }}
          />
          <View style={beritaSeniRupa.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaSeniRupa.cardCategory}>Melukis</Text>
                <Text style={beritaSeniRupa.cardTitle}>
                  Belajar Membuat Topeng dengan benar
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
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
      <View style={beritaSeniRupa.listCard}>
        <View style={beritaSeniRupa.cardItem}>
          <Image
            style={beritaSeniRupa.cardImage}
            source={{
              uri: 'https://i.pinimg.com/236x/cb/c1/01/cbc101210567c06b99a42ba8bcb16b1b.jpg',
            }}
          />
          <View style={beritaSeniRupa.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaSeniRupa.cardCategory}>Tarian Topeng</Text>
                <Text style={beritaSeniRupa.cardTitle}>
                  Penyambutan acara dengan melakukan tarian topeng
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={beritaSeniRupa.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaSeniRupa.cardText}>21 Sep 2023</Text>
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
    </View>

  );
};

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
    padding: 15,
    position: 'absolute',
    bottom: 0,
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
    paddingRight: 8,
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
const itemSeniPopuler = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
    bottom: 0,
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
    paddingRight: 8,
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
const itemSeniDaerah = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius: 5,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  imageBanner: {
    backgroundColor: '#20b2aa',
    width: 'auto',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius:30,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  headerSeniPopuler: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerSeniDaerah: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  textSeni: {
    fontSize: 20,
    marginRight: 8,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  notificationContainer: {
    // backgroundColor: 'white',
    // padding: 8,
    // borderRadius: 100
  },
  profileContainer: {
    marginLeft: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {
    // borderRadius: 10,
    // borderWidth: 1.5,
    // borderColor: 'black',
    // backgroundColor: 'rgba(180, 131, 61, 0.4)',
  },
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    top: 60,
    right: 25,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',

  },
  modalItem: {
    fontSize: 16,
    marginBottom: 12,
    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 0,
  },
  seniPopulerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

export default HomeScreen;