import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 7000);
  }, []);

  return (
    <View className="w-full h-full bg-[#00CCBB] flex justify-center items-center">
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        easing="ease-out"
        className="text-lg my-5 text-white font-bold text-center"
      >
        Delivery Clone
      </Animatable.Text>

      <Progress.CircleSnail
        size={70}
        indeterminate={true}
        color={["white", "red"]}
      />
    </View>
  );
}
