// 注册模块
import { makeAutoObservable } from "mobx"
import { http } from '@/utils'

class RegisterStore {

  constructor() {
    makeAutoObservable(this)
  }
  // 上传图片
  uploadImage = async (formData) => {
    const res = await http.post('/upload/image', formData, { headers: { 'content-type': 'multipart/form-data' } })
    return res
  }
}
export default RegisterStore