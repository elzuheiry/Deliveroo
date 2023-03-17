import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DishRow({ id, name, description, price, imgURL }) {
  const dispatch = useDispatch();

  //
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  //
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, imgURL }));
  };

  //
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  const [isPressed, setIsPressed] = useState(false);

  return (
    <View className="w-full h-auto">
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`flex-row items-center w-full p-3 border border-gray-300 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1">
          <Text className="text-xl font-bold capitalize mb-1">{name}</Text>
          <Text className="text-sm capitalize text-gray-800 mb-1">
            {description}
          </Text>
          <Text className="text-lg font-bold">
            <Currency quantity={price} currency="USD" />
          </Text>
        </View>

        <View className="w-14 h-14 overflow">
          <Image
            source={{ uri: imgURL }}
            className="w-full h-full rounded-sm"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View className="flex-row w-full items-center px-2">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "green" : "gray"}
              />
            </TouchableOpacity>

            <Text className="text-lg font-bold mx-2">{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
