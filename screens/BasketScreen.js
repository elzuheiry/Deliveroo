import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import ExitButton from "../components/ExitButton";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import Currency from "react-currency-formatter";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView>
      <View className="w-full h-full relative">
        <View>
          <ExitButton />
        </View>

        <View className="mt-6 -z-10">
          <Text className="text-center text-lg font-bold text-black uppercase">
            Basket
          </Text>
          <Text className="text-center text-sm font-normal text-gray-400 uppercase">
            {restaurant.title}
          </Text>
        </View>

        <View className="bg-white w-full my-5">
          <View className="flex-row items-center space-x-4 py-3 mx-5">
            <Image
              source={{
                uri: "https://picsum.photos/205",
              }}
              className="h-10 w-10 bg-gray-400 p-4 rounded-full"
            />
            <Text className="flex-1 font-bold text-base text-gray-800">
              Deliver in 50-75 min
            </Text>
            <TouchableOpacity>
              <Text className="text-[#00ccbb] text-sm font-bold">Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-3 px-5"
            >
              <View className="w-8 h-8 flex justify-center items-center rounded-full bg-[#f1f1f1]">
                <Text className="text-sm font-bold text-[#00ccbb]">
                  {items.length} x
                </Text>
              </View>
              <Image
                source={{
                  uri: items[0]?.imgURL,
                }}
                className="w-10 h-10 rounded-full"
              />
              <Text className="flex-1 font-bold text-base text-gray-600">
                {items[0]?.name}
              </Text>
              <Text className="text-gray-600 text-sm font-extrabold">
                <Currency quantity={items[0]?.price} currency="USD" />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00ccbb] text-sm font-bold">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="fixed left-0 bottom-0 bg-white py-2 px-5">
          <View className="flex-row justify-between items-center py-2">
            <Text className="text-gray-400 text-sm font-bold">SubTotal</Text>
            <Text className="text-gray-400 text-sm font-bold">
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between items-center py-2">
            <Text className="text-gray-400 text-sm font-bold">Deliver Fee</Text>
            <Text className="text-gray-400 text-sm font-bold">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between items-center py-2">
            <Text className="text-gray-800 text-sm font-extrabold">
              Order Total
            </Text>
            <Text className="font-extrabold text-lg">
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PerparingOrderScreen")}
            className="flex-row items-center justify-center bg-[#00ccbb] rounded py-4 my-2"
          >
            <Text className="flex-row items-center text-white font-bold text-sm capitalize text-center">
              Place Order
            </Text>
            <View className="ml-2">
              <PaperAirplaneIcon color="white" size={15} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
