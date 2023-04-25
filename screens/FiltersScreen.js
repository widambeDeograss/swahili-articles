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
  const [Tech, setTech] = useState(false);
    const [Ent, setEnt] = useState(false);
    const [Pol, setPol] = useState(false);
    const [Spot, setSpot] = useState(false);


  return (
    <View style={styles.screen}>
    <Text style={styles.title}>Available Filters / Restrictions</Text>
    <FilterSwitch
      label="Technology"
      state={Tech}
      onChange={newValue => setTech(newValue)}
    />
    <FilterSwitch
      label="Entertainment"
      state={Ent}
      onChange={newValue => setEnt(newValue)}
    />
    <FilterSwitch
      label="Politics"
      state={Pol}
      onChange={newValue => setPol(newValue)}
    />
    <FilterSwitch
      label="Economics"
      state={Spot}
      onChange={newValue => setSpot(newValue)}
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