import React, { Component } from 'react';
import { Text , View , SafeAreaView , Platform , ImageBackground , StatusBar , StyleSheet , TouchableOpacity , Image } from 'react-native';
// import { red } from 'react-native-reanimated';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/> 
                <ImageBackground style={styles.bgImage} resizeMode='cover' source={require("../assets/bg_image.png")} />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Home Screen!</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate("IssLocation");
                }} style={styles.gps}> 
                    <Text style={styles.locationText}> ISS Live Location </Text>
                    <Text style={styles.nomore}> {"Know more ---->"} </Text>
                    <Image style={styles.iconimg} source={require("../assets/iss_icon.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                  this.props.navigation.navigate("Meteors");
                }} style={styles.gps}> 
                    <Text style={styles.locationText}> Meteors </Text>
                    <Text style={styles.nomore}> {"Know more ---->"} </Text>
                    <Image style={styles.iconimg} source={require("../assets/meteor_icon.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate("Update");
                }} style={styles.gps}> 
                    <Text style={styles.locationText}> UPDATES! </Text>
                    <Text style={styles.nomore}> {"Know more ---->"} </Text>
                    <Image style={styles.iconimg} source={require("../assets/rocket_icon.png")}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  droidSafeArea:{
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
  titleBar:{
    flex: 0.15,
    justifyContent:'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
  },
  gps:{
    flex: 0.35,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  locationText:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 45,
    paddingLeft: 30
  },
  nomore:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 30
  },
  bgImage:{
    flex:1,
    justifyContent:'center',
  },
  iconimg:{
    position: 'absolute',
    width:200,
    height:200,
    resizeMode:'contain',
    right:20,
    top:-80,
  },
})