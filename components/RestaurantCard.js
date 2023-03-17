import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({
  image,
  title,
  rating,
  genre,
  address,
  dishes,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          image,
          title,
          rating,
          genre,
          address,
          dishes,
        });
      }}
    >
      <View className="w-64 bg-slate-100 overflow-hidden mr-4 rounded shadow-lg z-50">
        <View className="w-full h-36 bg-slate-400">
          <Image source={{ uri: image }} className="w-full h-full" />
        </View>

        <View className="p-4">
          <View className="mb-1">
            <Text className="font-extrabold text-xl capitalize">{title}</Text>
          </View>

          <View className="flex-row items-center justify-between mb-1">
            <View className="flex-row items-center">
              <View className="mr-1">
                <StarIcon color="green" size={22} />
              </View>
              <View>
                <Text className="text-base font-semibold capitalize text-green-700">
                  {rating}
                </Text>
              </View>
            </View>

            <View>
              <Text className="text-base font-semibold capitalize text-black">
                {genre}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <View className="mr-1">
              <MapPinIcon color="green" size={22} />
            </View>

            <View>
              <Text className="text-base font-semibold capitalize text-green-700">
                {"nearby ." + " " + address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
