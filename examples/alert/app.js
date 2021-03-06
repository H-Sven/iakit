import * as iakit from '../../src/index'
import { fastclick } from '../../src/utils'

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

fastclick(btn1, function() {
  // 修改默认按钮文案
  iakit.alert.config({btnText: 'ok'})
  iakit.alert('该手机号已经被注册过了', () => {
    // 复原更改
    iakit.alert.config({btnText: '确定'})
  })
})

fastclick(btn2, function() {
  iakit.alert(
    '指定回调函数',
    '点击确认按钮，执行指定的回调函数',
    () => {
      iakit.alert('已执行')
    }
  )
})

fastclick(btn3, function() {
  iakit.alert(
    '自定义按钮',
    '按钮可以指定多个，每个按钮包括文本与点击事件两个属性',
    [
      {
        text: '取消',
        onClick: () => {
          iakit.alert('点击了取消按钮')
        }
      },
      {
        text: '确定',
        onClick: () => {
          iakit.alert('点击了确定按钮')
        }
      }
    ]
  )
})
