import Header from "./components/Header";
import { Text } from "react-native";
import MovieCardComponent from "./components/MovieCardComponent";
import CardComponent from "./components/CardComponent";

export default function App() {
  return (
    <Header>
      <MovieCardComponent>
      </MovieCardComponent>
    </Header>
  );
}