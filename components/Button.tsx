import {StyleSheet, View, Pressable, Text} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}
export default function Button({label,onPress}:ButtonProps){
  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button:{
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color: '#333',
    fontSize: 16,
  }
})