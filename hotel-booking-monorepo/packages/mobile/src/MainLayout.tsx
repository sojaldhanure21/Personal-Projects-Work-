import React from "react"
import { Text, View ,Button } from "react-native"
import { Routes, Route } from "react-router-dom"
import SearchPage from "./Components/SearchWidget/SearchPage"
import { useGetContextQuery } from "./Services/api/HotelApi"
import { useAppSelector } from "./Redux/hooks"

const MainLayout = ({navigation} :any) => {

    const searchId = useAppSelector( state =>state.hotel.apiKey )
        useGetContextQuery()
    return (<View>
        <Text>Welcome to home Screen {searchId}</Text>
        <Button 
            title="Go To results Page"  
            onPress={()=>
            navigation.navigate("Results", {name : "sojal"})}/>
    </View>
    )
}
export default MainLayout