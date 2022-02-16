import React from "react";
import "./less/App.scss";
import bg from "./bg.jpg";
import Header from "./components/Header";
import Dock from "./components/Dock";
import RightMenu from "./components/RightMenu";
import OnStart from "./components/OnStart";
import Alert from "./components/Alert";
import Plugins from "./components/Plugins";
import SwalOrigin from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/src/sweetalert2.scss";

const MySwal = withReactContent(SwalOrigin);

globalThis.Swal = MySwal

globalThis.array = [
  {
    onClick: () => {
      alert("hel");
    },
    src: "/src/bg.jpg",
  },
  {
    onClick: () => {
      alert("hel");
    },
    src: "/src/bg.jpg",
  },
  {
    onClick: () => {
      alert("hel");
    },
    src: "/src/bg.jpg",
  },
  {
    onClick: () => {
      alert("hel");
    },
    src: "/src/bg.jpg",
  },
  {
    onClick: () => {
      alert("hel");
    },
    src: "/src/bg.jpg",
  },
];

globalThis.plugins = globalThis.plugins ?? [];

let menus = [
  {
    text: "Install Plugin",
    onClick: () => {
      Swal.fire({
        title: "填写插件链接",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "添加插件",
        showLoaderOnConfirm: true,
        preConfirm: async (url) => {
          if (url) {
            globalThis.plugins.push(url);
            return true;
          } else Swal.showValidationMessage(`请输入一个 URL`);
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((bool) => {
        if (bool) MySwal.fire("插件添加完成");
      });
    },
  },
];

function App() {
  return (
    <div className="App coverScreen lightMode">
      <OnStart />
      <Header />
      <RightMenu menus={menus} />
      <Dock />
      <Alert />
      <img src={bg} alt="background" className="coverScreen" />
      <Plugins />
    </div>
  );
}

export default App;
