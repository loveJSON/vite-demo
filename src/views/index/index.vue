<template>
	<p>hello world</p>
	<TitleComp :title-props="titleData"></TitleComp>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import TitleComp from "../../components/title/index.vue";

import "./index.less";

export default defineComponent({
	name: 'App',
	data:()=>{
		return {
			titleData:{
				title:'测试标题',
				color:"#ffffff",
				canGoBack:true
			}
		}
	},
	mounted() {
		console.log("mounted 钩子函数")
	},

	components:{
		TitleComp
	}
})
</script>
