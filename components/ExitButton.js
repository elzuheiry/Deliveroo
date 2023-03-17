import { View, TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <View className="absolute w-12 h-12 flex-row items-center justify-center rounded-full top-5 right-5 bg-slate-200/80 z-20">
      <TouchableOpacity onPress={navigation.goBack}>
        <XMarkIcon size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
}
