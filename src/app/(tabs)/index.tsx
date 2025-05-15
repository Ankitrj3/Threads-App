import { dummyPosts } from "@/dummyData";
import { FlatList, View, Text } from "react-native";
import PostListItem from "@/components/postListItem";
export default function HomeScreen(){
   return (
   <View>
      <FlatList
      data={dummyPosts}
      renderItem={({item}) => <PostListItem post={item} />}
      />
    </View>
)}