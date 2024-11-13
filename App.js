import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAppleAlt, faCoffee, faIceCream, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
// for the image, i tried upload links into the code, however the image does not show when i test it, so i saved the image in the assets/images

const datasource = [
  {
    title: "FOOD",
    bgColor: '#FFD700',
    textColor: '#CC9900',
    icon: faAppleAlt,
    data: [
      { key: 'Pizza', image: require('./assets/images/pizza.png') },
      { key: 'Burger', image: require('./assets/images/burger.png') },
    ]
  },
  {
    title: "DRINKS",
    bgColor: '#FF4500',
    textColor: '#B33D00',
    icon: faCoffee,
    data: [
      { key: 'Coffee', image: require('./assets/images/coffee.png') },
      { key: 'Tea', image: require('./assets/images/tea.png') },
    ]
  },
  {
    title: "DESSERTS",
    bgColor: '#1E90FF',
    textColor: '#1A75D1',
    icon: faIceCream,
    data: [
      { key: 'Cake', image: require('./assets/images/cake.png') },
      { key: 'Ice Cream', image: require('./assets/images/icecream.png') },
    ]
  },
  {
    title: "SNACKS",
    bgColor: '#32CD32',
    textColor: '#2B7F2B',
    icon: faPizzaSlice,
    data: [
      { key: 'Chips', image: require('./assets/images/chips.png') },
      { key: 'Popcorn', image: require('./assets/images/popcorn.png') },
    ]
  },
];

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.key}</Text>
        </View>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, bgColor, icon, textColor } }) => {
  return (
    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
      <FontAwesomeIcon icon={icon} size={30} color="black" />
      <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.buttonContainer}>
        <Button title="ADD FAVOURITE" onPress={() => alert('Add Favourite!')} />
      </View>
      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#CBC3E3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
