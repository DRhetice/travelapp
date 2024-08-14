import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import GlobalStyles from '../GlobalStyles';
import {HeroImage} from '../assets/index';


/*style={GlobalStyles.droidSafeArea}*/
const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView  className="bg-white flex-1 relative">
      {/* first section*/}

      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/*second section */}

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold" >Good Moment</Text>
        <Text className="text-[#3c6072] text-base">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
        </Text>
      </View>
      {/* circle section*/}
      <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      {/*IMAGE CONTAINER*/}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
        animation="fadeInDown"
        easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />



        <TouchableOpacity
        onPress={()=> navigation.navigate("Discover")}
        className="absolute bottom-20 w-24 h-24 border-[#00BCC9]  border-l-2 border-r-2 border-t-4
      rounded-full items-center justify-center ">
        
          <Animatable.View 
          animation={"pulse"}
          easing="ease-in-out"
          iterationCount="infinite"
          className="bg-[#00BCC9] w-20 h-20 rounded-full items-center justify-center">
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
          </TouchableOpacity>
           

      </View>

    </SafeAreaView>
  )
}

export default HomeScreen