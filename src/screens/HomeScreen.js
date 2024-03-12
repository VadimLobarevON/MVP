import { useNavigation } from "@react-navigation/native"
import { Text, Button, View } from "react-native"

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Thi is MVP Alive</Text>
    </View>
  );
}

export default HomeScreen
