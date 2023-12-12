import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import Subcategory from '../components/Subcategory/Subcategory';
import {useGetFoodByNameQuery} from '../redux/foods';

const Home = () => {
  const [openSubcategoriesDropdowns, setOpenSubcategoriesDropdowns] = useState(
    {},
  );
  const data = useSelector(state => state.dummyData.data);
  const {data: foodData} = useGetFoodByNameQuery();
  const mergedData = [...data, ...(foodData?.result || [])];

  function renderItem({item}) {
    function handleOpenSubCategoriesDropdown(id, _id) {
      setOpenSubcategoriesDropdowns(prevState => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    }
    return (
      <>
        <View style={styles.categoriesMainContainer}>
          <View style={styles.categoriesSubContainer}>
            <View style={styles.categoriesContent}>
              <Image
                source={require('../assets/three-dots.png')}
                resizeMode={'cover'}
                style={{width: 35, height: 35}}
              />
              <Image
                style={styles.imageStyles}
                source={{
                  uri: item?.image?.includes('undefined')
                    ? 'https://static.thenounproject.com/png/52646-200.png'
                    : item?.image,
                }}
              />
              <Text style={styles.categoryTitle}>
                {item?.name || item?.category_name}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleOpenSubCategoriesDropdown(item.id, item._id)}
              style={styles.dropdownImageStyles}>
              <Image
                source={
                  openSubcategoriesDropdowns[item.id]
                    ? require('../assets/arrow-up.png')
                    : require('../assets/down-arrow.png')
                }
                resizeMode={'cover'}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {openSubcategoriesDropdowns[item.id] ? (
          <Subcategory
            subcategoryData={item?.subCategories || item?.sub_cateries}
          />
        ) : null}
      </>
    );
  }

  return (
    <SafeAreaView>
      <Text style={styles.categoriesMainHeader}>
        Categories & Subcategories
      </Text>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        data={mergedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

// Styles Below

const styles = StyleSheet.create({
  categoriesMainHeader: {
    textAlign: 'center',
    paddingVertical: 30,
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
  categoriesMainContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesSubContainer: {
    width: '90%',
    borderColor: 'lightgray',
    borderWidth: 1,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  categoriesContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyles: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  categoryTitle: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
  },
  dropdownImageStyles: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
