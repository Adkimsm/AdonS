<template>
	<div a>
		<img />
	</div>
	<section id="laupad" style="display: none">
		<hr />
		<div class="icons">
			<div class="icon_bottom">
				<h2>LauPad</h2>
				<div class="icons">
					<img id="shutdown_btn" src="../assets/images/shutdown.png" />
					<img id="showLockScrBtn" src="../assets/images/keyhole-shield.png" />
					<img id="popSettingsBtn" src="" />
				</div>
			</div>
			<div class="icon_top">
				<img id="terminalButton" src="../assets/images/console_48px.png" />
				<img id="markdownButton" src="../assets/images/markdown_48px.png" />
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
					style="fill: #000000" id="showTodoListSvg">
					<path fill="#185abd"
						d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z">
					</path>
					<linearGradient id="5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1" x1="14.572" x2="43.188" y1="38.199"
						y2="9.583" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#4191fd"></stop>
						<stop offset="1" stop-color="#55acfd"></stop>
					</linearGradient>
					<path fill="url(#5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1)"
						d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z">
					</path>
				</svg>
				<img id="pluginButton" src="../assets/images/plugin_48px.png" />
				<img id="storeButton" src="../assets/images/ChromeWebStore_48px.svg" width="48px" height="48px">
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Laupad"
};
</script>

<style scoped>
section {
  box-shadow: rgba(0, 0, 0, 0.1) 0px -10px 20px;
  color: #0e0e0e;
  overflow: hidden;
  top: 45%;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  object-fit: cover;
  background-size: cover;
}

.lightMode section {
  background-color: #ffffff;
}

.darkMode section {
  background-color: rgb(24, 24, 24);
  color: #fff;
}

section .icon_bottom {
  margin: 2rem;
  top: 35px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

section .icon_bottom h2 {
  position: absolute;
  left: 35px;
  top: 20px;
}

section .icon_bottom .icons {
  float: right;
}

hr {
  background-color: #b3b3b3;
  margin: 0.5rem 17rem;
  border: transparent solid 1px;
  border-radius: 10px;
  height: 5px;
}

div[a] {
  z-index: 30;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 50%;
  right: 50%;
  bottom: 25px;
  width: 70px;
  padding: 5px;
  height: 70px;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 4px 7px 7px #00000042;
  box-sizing: border-box;
  backdrop-filter: blur(15px);
}

.lightMode div[a] {
  color: #2a2a2a;
  background-color: #ffffffe5;
}

.darkMode div[a] {
  color: #ffffff;
  background-color: rgba(24, 24, 24, 0.836);
}

</style>
