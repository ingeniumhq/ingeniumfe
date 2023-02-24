<template></template>

<script lang="ts">
	export default {
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			const script = document.createElement('script')
			script.onload = () => {}
			script.src = '/js/script.js'
			document.head.appendChild(script)
		})
	},
	}
</script>