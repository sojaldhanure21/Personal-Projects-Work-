import { Button, Text, View } from "react-native"

function SearchPage({navigation} :any) {
    return (
        <View>
            <Text>Welcome To search Page</Text>
            {/* <Button 
            title="Go To results Page"
            onPress={()=>
            navigation.navigate('ResultsPage', {name: 'search'})}/> */}
        </View>
    )
}
export default SearchPage