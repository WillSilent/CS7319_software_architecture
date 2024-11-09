import { Outlet, useOutletContext } from "react-router-dom";
import NavigateBar from "@/common/NavigateBar";
import Footer from "@/common/Footer";
import "./dashboard.less";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import { getToken, http } from "@/utils";
import dummy_user from "@/assets/data/sys_user.json";

const DashBoard = () => {
  const [user, setUser] = useState({
    id: "0",
    profile: "",
    username: "",
    isAdmin: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // useEffect(() => {
  //   async function getUser() {
  //     // console.log("login")
  //     // if (await getToken() === '') {

  //     //   setIsModalOpen(true)
  //     //   setModalContent("Please Login first!")
  //     //   return
  //     // }

  //     const result = await http.get("/auth/getUserInfo", {
  //       headers: { Authorization: "Bearer " + getToken() },
  //     });
  //     if (result.data.code === 90001) {
  //       //token过期了，重新登录
  //       setIsModalOpen(true);
  //       setModalContent("Please Login first!");
  //       return;
  //     }
  //     setUser(result.data.data);
  //   }
  //   // 一直尝试获取当前登录用户，如果 token 过期，需重新登录
  //   getUser();
  // }, []);
  useEffect(() => {
    function getUser() {
      if (getToken() === null) {
        //token过期了，重新登录
        setIsModalOpen(true);
        setModalContent("Please Login first!");
        return;
      }
      var currentUser = dummy_user.find((a) => a.username === getToken());
      setUser(currentUser);
    }
    // 一直尝试获取当前登录用户，如果 token 过期，需重新登录
    getUser();
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
      <Modal
        title="Alert"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{modalContent}</p>
        <a href="/login">to Login</a>
      </Modal>

      <NavigateBar profile={user.profile} isAdmin={user.isAdmin} />
      <div className="content">
        <Outlet context={{ user }} />
      </div>
      <Footer />
    </div>
  );
};
export default DashBoard;

export function useUser() {
  return useOutletContext();
}
