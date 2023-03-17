import { View, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-center rounded-full absolute top-11 left-5 w-12 h-12 bg-slate-200/80">
      <TouchableOpacity onPress={navigation.goBack}>
        <ArrowLeftIcon size={25} color="green" />
      </TouchableOpacity>
    </View>
  );
}
