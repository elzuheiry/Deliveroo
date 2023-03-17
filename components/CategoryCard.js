import { Text, TouchableOpacity, Image, View } from "react-native";

export default function CategoryCard({ title, urlImg }) {
  return (
    <TouchableOpacity>
      <View className="w-24 h-10 flex justify-center items-center rounded-full mr-2 overflow-hidden">
        <View className="w-full h-full relative">
          <Image
            source={{ uri: urlImg }}
            className="w-full h-full bg-slate-500"
          />
        </View>

        <View className="absolute z-10">
          <Text className=" text-white text-sm font-bold tracking-widest capitalize">
            {title}
          </Text>
        </View>
        <View className="absolute w-full h-full bg-black opacity-40"></View>
      </View>
    </TouchableOpacity>
  );
}
