import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function PerparingOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className=" bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivery-truck-4439.png")}
        animation="slideInDown"
        iterationCount={1}
        easing="ease-out"
        className="w-46 h-46"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        easing="ease-out"
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaunrant to accept your order!
      </Animatable.Text>

      <Progress.CircleSnail
        size={60}
        indeterminate={true}
        color={["white", "red"]}
      />
    </SafeAreaView>
  );
}
