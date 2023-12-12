import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Subcategory = ({subcategoryData}) => {
  return (
    <View style={styles.subCategoryMainContainer}>
      {subcategoryData?.map((e, index) => {
        return (
          <View key={index} style={styles.subCategorySubContainer}>
            <Text style={styles.subCategoryText}>{e?.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Subcategory;

// Styles below

const styles = StyleSheet.create({
  subCategoryMainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategorySubContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '90%',
  },
  subCategoryText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
  },
});
