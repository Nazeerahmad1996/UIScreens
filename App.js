/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { BoxShadow } from 'react-native-shadow'
const shadowOpt = {
  width: 36,
  height: 36,
  color: "#CED0D2",
  border: 10,
  radius: 10,
  opacity: 0.26,
  x: -2,
  y: 2,
  style: { margin: 15 }
}
const shadowItem = {
  width: 170,
  height: 260,
  color: "#CED0D2",
  border: 10,
  radius: 10,
  opacity: 0.26,
  x: 1,
  y: 2,
  style: { margin: 11 }
}

const filterShadow = {
  width: width - 30,
  height: 40,
  color: "#CED0D2",
  border: 10,
  radius: 10,
  opacity: 0.26,
  x: 1,
  y: 2,
  style: { margin: 11, alignSelf: 'center' }
}
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
const image = require('./assets/dog.jpg');

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Shop all pets",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Treats for all their tricks",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "New in pets",
  },
];


const DATA1 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Arm & Hammer SLIDE Easy Clean-Up Litter, Multi-Cat...",
    type: "Arm & Hammer  -  Premium",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting indu...",
    price: "$9.26",
    stock: "In Stock",
    stockCount: 400,
    reviewCount: 500,
    review: 4.8,
    time: 60,
    top: 'Top Seller'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Arm & Hammer SLIDE Easy Clean-Up Litter, Multi-Cat...",
    type: "Arm & Hammer  -  Premium",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting indu...",
    price: "$9.26",
    stockCount: 600,
    stock: "In Stock",
    reviewCount: 500,
    review: 4.8,
    time: 60
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Arm & Hammer SLIDE Easy Clean-Up Litter, Multi-Cat...",
    type: "Arm & Hammer  -  Premium",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting indu...",
    price: "$9.26",
    stockCount: 400,
    stock: "In Stock",
    reviewCount: 500,
    review: 4.8,
    time: 60
  },
];

const App: () => React$Node = () => {
  const [selectedId, setSelectedId] = useState(null);



  const RenderTopButton = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#2A2E7C" : "#fff";

    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.roundButton, { backgroundColor: backgroundColor, }]}>
        <Text style={[styles.RoundButtonText, { color: backgroundColor == "#2A2E7C" ? '#fff' : "#2A2E7C" }]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const RenderRowItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#2A2E7C" : "#fff";

    return (
      <BoxShadow setting={shadowItem}>
        <TouchableOpacity style={[styles.Item, { backgroundColor: '#fff', borderRadius: 10 }]}>
          <ImageBackground imageStyle={{ borderRadius: 10 }} source={image} style={styles.image}>
            <View style={{ flex: 1 }}>
              {item.top && (
                <View style={{ width: 55 }}>
                  <Text style={styles.TopBadge}>{item.top}</Text>
                </View>
              )}
              <View style={styles.ImageBottom}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={styles.reviewView}>
                    <Icon name="star" size={14} color="#42B648" />
                    <Text style={styles.review}>{item.review}</Text>
                    <Text style={styles.reviewCount}> ({item.reviewCount})</Text>
                  </View>
                  <View style={styles.time}>
                    <Text style={styles.timeText}>{item.time} min</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{ margin: 6 }}>
            <Text style={styles.ItemTitle}>{item.title}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.BottomView}>
              <Text style={styles.price}>{item.price}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.stockView}>{item.stock}</Text>
                <Text style={styles.stock}>{item.stockCount}</Text>
              </View>
              <TouchableOpacity>
                <Icon name="heart" size={16} color="#42B648" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </BoxShadow>
    );
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Image style={{ height: 110, width: 150, alignSelf: 'center' }} source={require('./assets/slooth.png')} />

        <View style={{ alignSelf: 'flex-end', marginTop: -60 }}>
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10 }}>
              <Icon name="search" size={25} color="#2A2E7C" />
            </TouchableOpacity>
          </BoxShadow >

        </View>

        <BoxShadow setting={filterShadow}>
          <View style={{ width: width - 26, backgroundColor: '#fff', height: 40, padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent:'space-between' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icon style={{marginRight:5}} name="filter" size={18} color="#42B648" />
              <Text style={styles.ItemTitle}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Entypo style={{marginRight:5}} name="location-pin" size={18} color="#42B648" />
              <Text style={styles.ItemTitle}>Arlington Town, Texas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={styles.ItemTitle}>Short By:$</Text>
              <Icon style={{marginLeft:5}} name="caret-down" size={18} color="#42B648" />
            </TouchableOpacity>
          </View>
        </BoxShadow>

        <View>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={RenderTopButton}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>

        <View style={styles.body}>
          <View style={{ borderLeftWidth: 3, borderColor: '#42B648', flex: 1 }}>
            <Text style={styles.Title}>Today's Offers</Text>
          </View>
          <TouchableOpacity style={{}}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={DATA1}
            horizontal={true}
            renderItem={RenderRowItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>


      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  roundButton: {
    borderRadius: 50,
    borderColor: '#2A2E7C',
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
    marginTop: 15

  },
  RoundButtonText: {
    fontWeight: '700',
    color: '#2A2E7C',
    fontSize: 13
  },
  body: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Title: {
    fontSize: 20,
    marginLeft: 5,
    color: '#2A2E7C',
    fontWeight: 'bold',
  },
  viewText: {
    fontWeight: 'bold',
    color: '#42B648',
    fontSize: 12,
    textDecorationColor: '#42B648',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  Item: {
    width: 170,
    // height: 130,
    marginLeft: 10,
  },
  image: {
    width: 170,
    height: 130,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  TopBadge: {
    backgroundColor: '#2A2E7C',
    fontSize: 9,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  ItemTitle: {
    fontSize: 12,
    color: '#2A2E7C',
    fontWeight: 'bold',
  },
  type: {
    fontSize: 7,
    color: '#42B648',
    marginTop: 6
  },
  description: {
    fontSize: 9,
    color: '#A7A7A7',
    fontWeight: 'bold',
  },
  BottomView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#F5F5F5',
    padding: 4,
    borderRadius: 15,
    marginBottom: -2
  },
  stockView: {
    fontSize: 9,
    padding: 2,
    color: '#42B648',
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 9,
    padding: 2,
    paddingHorizontal: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    fontWeight: 'bold',
    color: '#2A2E7C',
  },
  reviewView: {
    // flex:1,
    // flexDirection: 'row',
    // width: 45,
    padding: 3,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
  },
  review: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 3,
  },
  reviewCount: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#C2C2C2'
  },
  ImageBottom: {
    flex: 1, justifyContent: 'flex-end', marginBottom: 6, marginLeft: 6
  },
  time: {
    backgroundColor: '#42B648',
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 15,
    marginRight: 6
  },
  timeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10
  }
});

export default App;
