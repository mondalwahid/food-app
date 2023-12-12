import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {useAddFoodMutation} from '../redux/addFoodSlice';

function Additems() {
  const [categoryname, setCategoryname] = useState('');
  const [subcategoryname, setSubcategoryname] = useState('');
  const [addFoodData] = useAddFoodMutation();

  function addItems() {
    if (!categoryname) {
      Alert.alert('Error', 'Category name is required.');
      return;
    }

    addFoodData({
      category_name: categoryname,
      sub_cateries: setSubcategoryname,
      // image: null,
    }).then(res => {
      Alert.alert('Success', 'Item Added!');
    });
  }

  function handleCategoryTextChange(text) {
    setCategoryname(text);
  }

  function handleSubCategoryTextChange(text) {
    setSubcategoryname(text);
  }
  return (
    <SafeAreaView>
      <Text style={styles.addCategoriesHeader}>
        Add Categories & Subcategories
      </Text>

      <View style={styles.dividerLine} />

      <View style={styles.addCategoriesMainContainer}>
        <View style={{width: '90%'}}>
          <Text style={styles.createCategoriesHeaderText}>Category name</Text>
          <TextInput
            onChangeText={handleCategoryTextChange}
            value={categoryname}
            style={styles.createCategoryInput}
            placeholder="Enter Category"
          />
        </View>

        <View style={{width: '90%'}}>
          <Text style={styles.createCategoriesHeaderText}>Category Image</Text>
          <View style={styles.mainImageUploadedDisplayingContainer}>
            <View style={styles.subImageUploadedDisplayingContainer}>
              <Image
                source={require('../assets/three-dots.png')}
                resizeMode={'cover'}
                style={{width: 15, height: 15}}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.chooseFileBtn}>
              <Text style={styles.chooseFileBtnText}>Choose File</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width: '90%'}}>
          <Text style={styles.subCategoriesHeaderText}>
            Create sub-categories
          </Text>
          <View style={styles.inputAndBtnContainer}>
            <TextInput
              onChangeText={handleSubCategoryTextChange}
              value={subcategoryname}
              style={styles.subCategoriesInputStyles}
              placeholder="Enter Sub Category"
              keyboardType="default"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addSubCategoriesBtn}>
              <Text style={{color: '#fff', fontSize: 24}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={addItems}
          activeOpacity={0.8}
          style={styles.addItemsStyles}>
          <Text style={styles.addItemsText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Additems;

// Styles Below

const styles = StyleSheet.create({
  addCategoriesHeader: {
    textAlign: 'center',
    paddingVertical: 30,
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
  dividerLine: {
    width: 1,
    height: 1,
    backgroundColor: 'lightgray',
    width: '90%',
    alignSelf: 'center',
  },
  addCategoriesMainContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  createCategoriesHeaderText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 15,
  },
  createCategoryInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 15,
  },
  mainImageUploadedDisplayingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subImageUploadedDisplayingContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '40%',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  chooseFileBtn: {
    backgroundColor: '#00a1e4',
    width: '50%',
    paddingVertical: 10,
    borderRadius: 3,
  },
  chooseFileBtnText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  subCategoriesHeaderText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 15,
  },
  inputAndBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subCategoriesInputStyles: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 15,
  },
  addSubCategoriesBtn: {
    backgroundColor: '#00a1e4',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  addItemsStyles: {
    width: '90%',
    backgroundColor: '#00a1e4',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 3,
  },
  addItemsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});
