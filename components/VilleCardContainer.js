import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const VilleCardContainer = (props) => {
  const handlepress = () => {
    props.setBl_lat(props.bl_lat);
    props.setBl_lng(props.bl_lng);
    props.setTr_lat(props.tr_lat);
    props.setTr_lng(props.tr_lng);
  };

  return (
    <TouchableOpacity
      onPress={handlepress}
      className=" rounded-md  space-y-2 px-3 py-2 mx-2
      shadow-md bg-white my-2"
    >
      <Text>{props.nom} </Text>
    </TouchableOpacity>
  );
};

export default VilleCardContainer;
