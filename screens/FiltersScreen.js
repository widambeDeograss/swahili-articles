import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

function FiltersScreen() {
  return (
    <View style={styles.screen}>
    <Text style={styles.title}>Available Filters / Restrictions</Text>
    <FilterSwitch
      label="Technology"
      // state={isGlutenFree}
      // onChange={newValue => setIsGlutenFree(newValue)}
    />
    <FilterSwitch
      label="Entertainment"
      // state={isLactoseFree}
      // onChange={newValue => setIsLactoseFree(newValue)}
    />
    <FilterSwitch
      label="Politics"
      // state={isVegan}
      // onChange={newValue => setIsVegan(newValue)}
    />
    <FilterSwitch
      label="Economics"
      // state={isVegetarian}
      // onChange={newValue => setIsVegetarian(newValue)}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen