// 登录模块
import { makeAutoObservable } from "mobx";
import { setToken, getToken, clearToken, http } from "@/utils";
import dummy_user from "@/assets/data/sys_user.json";

class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  // 登录
  // login = async ({ username, password, remember }) => {
  //   const res = await http.post(
  //     "/auth/login",
  //     {
  //       username: username,
  //       password: password,
  //       isRemembered: remember ? 1 : 0,
  //     },
  //     { headers: { "content-type": "multipart/form-data" } }
  //   );
  //   this.token = res.data.data;
  //   // 还有这里哦！！
  //   setToken(res.data.data);
  // };
  login = async ({ username, password, remember }) => {
    // 遍历 dummy_user 查看是否匹配
    const matchedUser = dummy_user.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setToken(username);
    } else {
      throw new Error("Incorrect username or password");
    }
  };

  getUserInfo = async () => {
    const res = await http.get("/auth/getUserInfo", {
      headers: { Authorization: "Bearer " + getToken() },
    });
    console.log(res.data);
    return res.data;
  };
}
export default LoginStore;
