<template>
	<Header></Header>
	<Laupad></Laupad>
	<rightMenu></rightMenu>
	<img
		alt="Vue logo"
		src="./assets/logo.png"
		class="animate__animated animate__bounce"
	/>
	<img src="./assets/images/壁纸01.jpg" bg />
</template>

<script>
import Header from "./components/Header.vue";
import Laupad from "./components/Laupad.vue";
import RightMenu from "./components/RightMenu.vue";
export default {
	name: "App",
	components: {
		Header,
		Laupad,
		RightMenu,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	width: 100%;
}

img[bg] {
	z-index: -9999;
	top: 0px;
	left: 0;
	position: fixed;
	object-fit: cover;
	background-size: cover;
	width: 100vw;
	height: 100vh;
}

* {
	transition: all 0.2s;
}

body {
	user-select: none;
	cursor: default;
	height: 100%;
	width: 100%;
}

html {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
</style>
