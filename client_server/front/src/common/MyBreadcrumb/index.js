import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const MyBreadcrumb = (props) => {
  return (
    <Breadcrumb style={{ margin: "16px 0", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2px",
        }}
      >
        <HomeOutlined style={{ margin: "0 10px" }} />
      </div>
      <Breadcrumb.Item>
        <a href={"/"}>Home</a>
      </Breadcrumb.Item>
      {props.paths.map((path) => (
        <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
