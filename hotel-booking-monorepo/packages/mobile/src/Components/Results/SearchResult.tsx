import { Button, Text, View } from "react-native";

function SearchResults({navigation, route}:any) {
    return ( <View>
        <Text>Welcome to result Page</Text>
<Text> {route.params.name}  </Text>
<Button
title="Details Page"
onPress={ ()=> navigation.navigate("Details")}/>
    </View> );
}

export default SearchResults;