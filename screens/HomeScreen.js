import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { featuredCategories } from "../backEnd/featuredCategories";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white w-full h-full">
      {/* HEADER */}
      <View className=" bg-slate-300">
        <SafeAreaView>
          <View className="px-3">
            <View className="flex-row items-center justify-between w-full h-16">
              <View className="flex-row items-center space-x-3">
                <View>
                  <Image
                    source={{
                      uri: "https://picsum.photos/id/237/200/300",
                    }}
                    className="w-9 h-9 rounded-full"
                  />
                </View>

                <View>
                  <Text className="font-bold text-gray-600 text-xs">
                    Devliver Now!
                  </Text>

                  <View className="flex-row items-center">
                    <Text className="font-bold text-xl leading-6">
                      Current Location
                    </Text>
                    <View className="ml-1">
                      <ChevronDownIcon size={20} color="#00CC88" />
                    </View>
                  </View>
                </View>
              </View>

              <View className=" bg-slate-200 p-2 rounded-full">
                <TouchableOpacity>
                  <UserIcon size={35} color="#00CC88" />
                </TouchableOpacity>
              </View>
            </View>

            {/* BOX SEARCH */}
            <View className="flex-row items-center justify-between my-2">
              <View className="flex-row items-center w-80 h-10 px-2 rounded-lg bg-white">
                <View className="mr-2">
                  <MagnifyingGlassIcon size={30} color="#00CC88" />
                </View>
                <View>
                  <TextInput
                    className="w-64 text-lg font-medium"
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                  />
                </View>
              </View>

              <View className="ml-3">
                <AdjustmentsVerticalIcon color="#00CC88" size={35} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/* BODY */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-3 mb-2">
          {/* Categories */}
          <Categories />

          {/* Featured Categories Rows */}
          {featuredCategories.map((category) => (
            <FeaturedRow
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              restaurants={category.restaurants}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
