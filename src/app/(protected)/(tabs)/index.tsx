import { dummyPosts } from "@/dummyData";
import { FlatList, View, Text  } from "react-native";
import PostListItem from "@/components/postListItem";
import { Link } from "expo-router";

export default function HomeScreen(){
   return (
   <View>
      <FlatList
      data={dummyPosts}
      renderItem={({item}) => <PostListItem post={item} />}
      ListHeaderComponent={()=>(
         <Link href="/new" className='text-blue-500 p-4 text-center text-3xl'>
            New Post</Link>
      )}/>
    </View>
)}