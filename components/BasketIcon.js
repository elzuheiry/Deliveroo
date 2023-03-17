import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className=" bg-[#00ccbb] p-4 rounded-md flex-row items-center justify-between mx-5"
      >
        <View className="w-7 h-7 flex justify-center items-center rounded-full bg-[#01a296]">
          <Text className="text-white font-extrabold text-lg">
            {items.length}
          </Text>
        </View>

        <Text className="text-white font-extrabold text-lg uppercase">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
