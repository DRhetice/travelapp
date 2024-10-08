import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GlobalStyles from "../GlobalStyles";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import ItemsCardContainer from "../components/ItemsCardContainer";
import { getPlaceData } from "../api";
import { TextInput } from "react-native";
import { Button } from "react-native";
import data from "../data";
import VilleCardContainer from "../components/VilleCardContainer";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [seachResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(
      (item) => item.nom.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResults(results);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlaceData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);

      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);
  return (
    <SafeAreaView className="flex-1 relative">
      <View className="flex-row items-center justify-between px-6 pt-3">
        <View>
          <Text className="text-[46px] text-[#0B6468] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg justify-between space-x-2 ">
        {/*<GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchdetail={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />*/}
        <TextInput
          className=" flex-1 rounded-md"
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text className="font-bold">Rechercher</Text>
        </TouchableOpacity>
      </View>

      {/* <View className="flex-row items-center  mx-4 rounded-xl py-2 px-4 shadow-lg justify-center space-y-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((ville) => (
            <VilleCardContainer
              key={ville.nom}
              nom={ville.nom}
              bl_lat={ville.bl_lat}
              bl_lng={ville.bl_lng}
              tr_lat={ville.tr_lat}
              tr_lng={ville.bl_lng}
              setBl_lat={setBl_lat}
              setBl_lng={setBl_lng}
              setTr_lat={setTr_lat}
              setTr_lng={setTr_lng}
            />
          ))}
        </ScrollView>
      </View> */}

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[20px] font-bold ">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#0e383b] text-[20px] font-bold ">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#ABC4C7"
                />
              </TouchableOpacity>
            </View>
            <View className="items-center px-4 mt-8 flex-row justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemsCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center justify-center space-y-8 ">
                    <Text className="text-2xl font-semibold text-[#428288]">
                      Opps.... pas de Data
                    </Text>
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
