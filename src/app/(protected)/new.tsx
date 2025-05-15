import { View, Text , TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function New() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView edges={['bottom']} className='flex-1 p-4'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
       keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
       className='flex-1'>

      <Text className='text-white text-lg font-bold' >username</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='What is on your mind?'
        placeholderTextColor='gray'
        className='text-white text-lg'
        multiline
        numberOfLines={4}
      />
      <View className="mt-auto">
        <Pressable onPress={()=>console.log('post: ',text)} className='bg-white self-end rounded-full px-6 py-3'>
          <Text className='text-black font-bold'>Post</Text>
        </Pressable>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}