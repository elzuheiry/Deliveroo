import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ id, title, description, restaurants }) {
  return (
    <View className="my-3" key={id} id={id}>
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-extrabold text-2xl">{title}</Text>
        </View>

        <View>
          <ArrowRightIcon size={25} color="#00CCBB" />
        </View>
      </View>

      <View>
        <Text className="text-base text-gray-500 pb-2">{description}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        className=""
      >
        {/* RestaurantCards */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
