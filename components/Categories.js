import { ScrollView } from "react-native";
import { categories } from "../backEnd/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{}}
      className="my-3"
    >
      {/* CategoryCard */}
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          urlImg={category.image}
        />
      ))}
    </ScrollView>
  );
}
