<template></template>

<script lang="ts">
export default {
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			const script = document.createElement('script')
			script.onload = () => { }
			script.src = '/js/script.js'
			script.className = 'customscript'
			document.body.appendChild(script)
		})
	},

	mounted() {
		const script = document.createElement('script')
		script.onload = () => { }
		script.src = '/js/script.js'
		script.className = 'customscript'
		document.body.appendChild(script)

		
	},

	
}

console.log('loadscripts component')

</script>