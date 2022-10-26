import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useSelector } from 'react-redux'



const Myself = () => {
  const counter = useSelector((state:any) => state.counter);

  const onGoHome=()=>{
    Taro.reLaunch({
      url:"/pages/index/index"
    })
  }
  return (<View>


    <Text>myself</Text>

    <View>
      store counter num: {counter.num}
    </View>

    <Button onClick={onGoHome}>go Home</Button>
  </View>)
}

export default Myself;
