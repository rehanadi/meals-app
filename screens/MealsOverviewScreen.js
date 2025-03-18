import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
  
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return (
    <MealsList items={meals} />
  );
};

export default MealsOverviewScreen;