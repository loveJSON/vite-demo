<template>
	<div>{{ dataProps.title }}</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

import {TitleBusiness,titleFace} from "./TitleBusiness";

export default defineComponent({
	name: "index",

	props: {
		titleProps: {
			type: Object as PropType<titleFace>
		}
	},

	setup(props, context) {
		let _data:titleFace = {
			title: "",
			color:"",
			canGoBack:false
		}

		// TitleBusiness.getData(_data);

		// return {
		// 	getComputed: TitleBusiness.getComputed(),
		// 	getWatched: TitleBusiness.getWatch(),
		// 	props
		// }

		return {
			dataProps:_data
		};
	}
})
</script>n

<style scoped>

</style>
