<template>
	<header id="dropSelectToMoveWindow" style="-webkit-app-region: drag">
		Easier
	</header>
	<div class="dropdown">
		<div class="item">
			<button class="dropbtn">Dev</button>
			<div class="dropdown-content">
				<a id="dropdownHeaderReloadDevBtn">Reload</a>
				<a id="dropdownHeaderToolsDevBtn">Dev Tools</a>
			</div>
		</div>
		<div class="item">
			<button class="dropbtn">Plugins</button>
			<div class="dropdown-content">
				<a id="dropdownHeaderInstallPluginsBtn">
					Install Plugin From JSON File...
				</a>
				<a id="dropdownHeaderUninstallAllPluginsBtn">
					Uninstall All Plugins
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
	width: 100%;
	height: 25px;
	padding: 5px;
	background-color: #2a2a2a;
	color: #fff;
	display: flex;
	padding-left: 13px;
	align-items: center;
}
</style>
