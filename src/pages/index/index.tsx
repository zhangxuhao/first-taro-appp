import { View, Text, Button } from '@tarojs/components'
import { useEffect, useState } from 'react'

import Taro,{ useDidShow, useLoad, useUnload, useDidHide } from '@tarojs/taro' // Taro 专有 Hooks
import { useSelector, useDispatch } from 'react-redux'
import { ADD, MINUS } from "../../constants/counter";

import  './index.scss';



const Index = () => {
  const [num,setNum]=useState<number>(0);

  const dispatch = useDispatch();
  const counter = useSelector((state:any) => state.counter);
console.log("counter:",counter);


  // 页面加载
  useLoad(()=>{
    console.log("load page")
  })


  //页面加载完毕
  useDidShow(()=>{
    console.log("show page")
  })
  
  //页面隐藏  navigateTo
  useDidHide(() => {
    console.log('hide page')
  })

  //页面卸载  reLaunch
  useUnload(()=>{
    console.log("unload page")
  })

  useEffect(()=>{
    console.log("update num",num);
  },[num])


  const jumpMyself = ()=>{
    console.log("jumping……")
    Taro.reLaunch({
      url:"/pages/myself/index?a=1"
    })
  }

  const onJumpPageTwo=()=>{
    Taro.navigateTo({
      url:"/pages/pageTwo/index?aa=1"
    });
  }
  return (<View>
    <View className='section'>
      <Text className='title'> 页面状态: </Text>
      <View className='num' >num:{num}</View>
      <Button onClick={()=>setNum(num+1)} >num++</Button>
    </View>
    <View className='section'>
      <Text className='title'> 路由跳转: </Text>
      <Button onClick={jumpMyself} >reLaunch myself</Button>
      <Button onClick={onJumpPageTwo} >navigateTo PageTwo</Button>
    </View>

    <View className='section'>
      <Text className='title'>store状态:</Text>
      <View>
        store counter num: {counter.num}
      </View>

      <Button onClick={() => dispatch({ type: ADD })}>
        add store num
      </Button>
      <Button onClick={() => dispatch({ type: MINUS })}>
        minus store num
      </Button>
    </View>

  </View>)
}

export default Index
