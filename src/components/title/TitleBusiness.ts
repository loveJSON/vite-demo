/*
    createdBy:muyufei
    createdDate:2021/10/25
    des:
*/

import {ref,reactive,watchEffect,watch,computed, Ref} from "vue";

export interface titleFace {
	title: string,
	color: string,
	canGoBack: boolean
}

export class TitleBusiness {
	
	static titleData: Ref<{ title: string; color: string; canGoBack: boolean; }>;
	
	static getData(data:titleFace){
		this.titleData = ref(data);
	}
	
	static getWatch(){
		return watchEffect(()=>{
			this.titleData.value.title = "title text getWatch"
		})
	}
	
	static getComputed(){
		return computed(()=>{
			this.titleData.value.title = "hello text getComputed"
		})
	}
	
}
