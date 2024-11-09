import React from "react"
import LoginStore from './login.Store'
// import RegisterStore from './register.Store'
import HomeStore from './home.Store'

class RootStore {
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
    // this.registerStore = new RegisterStore()
    this.homeStore = new HomeStore()
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)