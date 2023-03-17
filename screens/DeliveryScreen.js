import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import * as Animatable from "react-native-animatable";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className=" bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={35} color="white" />
          </TouchableOpacity>

          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <Animatable.View
          animation="slideInDown"
          iterationCount={1}
          easing="ease-out"
          className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-xl"
        >
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg font-bold text-gray-400 my-1">
                Estimated Arrival
              </Text>
              <Text className="text-4xl font-extrabold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar indeterminate={true} color="#00ccbb" />

          <Text className="mt-3 text-gray-500 font-light">
            Your order at{" "}
            <Text className="text-gray-700 font-bold">{restaurant.title}</Text>{" "}
            is being prepared
          </Text>
        </Animatable.View>
      </SafeAreaView>

      <View className="flex-1 -mt-10 z-0">
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0221,
          }}
          className="min-w-full min-h-full"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="red"
          />
        </MapView>
      </View>

      <SafeAreaView>
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          easing="ease-out"
          className="bg-white w-full py-5 flex justify-center items-center"
        >
          <View className="flex-row items-center space-x-5 mx-5">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="w-12 h-12 bg-gray-300 p-4 rounded-full overflow-hidden"
            />

            <View className="flex-1">
              <Text className="text-lg">Sonny Sangha</Text>
              <Text className="text-gray-400">Your Rider</Text>
            </View>

            <Text className="text-[#00ccbb] text-lg font-bold">Call</Text>
          </View>
        </Animatable.View>
      </SafeAreaView>
    </View>
  );
}
