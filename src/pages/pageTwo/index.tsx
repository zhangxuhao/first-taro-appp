import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad, useRouter } from '@tarojs/taro'
import { useSelector } from 'react-redux'


const PageTwo=()=>{
  const counter = useSelector((state:any) => state.counter);

  const router=useRouter();
  useLoad(()=>{
    console.log('router:',router,router.params)
  })

  const onGoBack=()=>{
    Taro.navigateBack();
  }


  return (<View>
    there is pageTwo

    <View>
      store counter num: {counter.num}
    </View>

    <Button onClick={onGoBack}>go back</Button>
  </View>)
}

export default PageTwo;
