import { makeAutoObservable } from "mobx"
import { http } from '@/utils'

class HomeStore {

  constructor() {
    makeAutoObservable(this)
  }
  // 轮播图
  carouselImages = async () => {
    const res = await http.get('/home/getCarouselImages')
    return res.data
  }

  // Equipment
  equipments = async () => {
    const res = await http.get('/home/getNewestEquipmentPost')
    return res.data
  }

  // Courtmate
  courmates = async () => {
    const res = await http.get('/home/getNewestCourmatePost')
    return res.data
  }

}
export default HomeStore