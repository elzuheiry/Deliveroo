import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BackButton from "../components/BackButton";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/features/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: { id, image, title, rating, genre, address, dishes, long, lat },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        image,
        title,
        rating,
        genre,
        address,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  return (
    <>
      <View className="w-full h-full bg-white">
        <ScrollView>
          <View className="mb-24">
            <View className="w-full h-60 mb-6 overflow-hidden relative">
              <Image
                source={{
                  uri: image,
                }}
                className="w-full h-full"
              />

              <BackButton />
            </View>

            <View className="px-3 bg-white">
              <View className="my-2">
                <Text className="text-xl font-bold capitalize">{title}</Text>
              </View>

              <View className="flex-row items-center mb-3">
                <View className="mr-1">
                  <StarIcon size={20} color="green" />
                </View>

                <View className="mr-3">
                  <Text className="text-sm text-green-500 capitalize">
                    {rating}
                  </Text>
                </View>

                <View className="mr-3">
                  <Text className="text-sm text-green-500">{genre}</Text>
                </View>

                <View className="mr-1">
                  <MapPinIcon size={20} color="green" />
                </View>

                <View>
                  <Text className="text-sm text-green-500 capitalize">
                    {"nearby" + " " + address}
                  </Text>
                </View>
              </View>

              <View className="mb-3">
                <Text className="text-md text-gray-500 capitalize">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </Text>
              </View>

              <TouchableOpacity>
                <View className="flex-row items-center justify-between py-3 border-y border-gray-300">
                  <View className="flex-row items-center">
                    <View className="mr-2">
                      <QuestionMarkCircleIcon color="gray" size={18} />
                    </View>
                    <View>
                      <Text className="text-md font-bold capitalize">
                        have a food alergy
                      </Text>
                    </View>
                  </View>
                  <View>
                    <ChevronRightIcon color="green" size={25} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View className="py-4 px-3 bg-slate-200">
              <Text className="text-black font-bold text-2xl capitalize">
                menu
              </Text>
            </View>

            {/* DishRows */}
            {dishes.map((dish) => (
              <DishRow
                key={dish.id}
                id={dish.id}
                name={dish.title}
                description={dish.description}
                price={dish.price}
                imgURL={dish.image}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <BasketIcon />
    </>
  );
}
