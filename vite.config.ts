/*
    createdBy:muyufei
    createdDate:2021/10/25
    des: https://vitejs.dev/config/
*/

import vue from '@vitejs/plugin-vue';

import { defineConfig } from "vite";

const path = require("path");

export default defineConfig(({mode}) => {
	
	console.log("--------------------------");
	console.log("开始构建");
	console.log("mode: ", mode);
	
	console.log(path.join(__dirname,`./src/views/${mode}/`));
	console.log(path.join(__dirname,`/build/${mode}`));
	
	console.log("--------------------------");
	
	return {
		plugins: [vue()],
		
		/*
		* 打包路径配置：打包入口找的是index.html，在html文件里面有引入的ts入口
		* 这里配置根路径，解决打包后无法访问静态资源问题
		*  */
		root: `./src/views/${mode}/`,
		
		
		base: "./",
		
		/*公共静态资源路径：默认public*/
		// publicDir:path.join(__dirname,`./src/views/${mode}/`),
		
		/*打包配置*/
		build: {
			
			/*打包默认输出文件是 dist，相对于根路径：index.html*/
			outDir: path.join(__dirname,`/build/${mode}`),
			
			/*静态资源输出路径，相对outDir，默认: ./assets */
			assetsDir: "./",
			
			/*小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项*/
			assetsInlineLimit: 4000,
			
			rollupOptions: {
				/*配置打包后文件不使用hash*/
				output: {
					entryFileNames: "[name].js",
					chunkFileNames: "[name].js",
					assetFileNames: "[name][extname]"
				}
			},
			watch: {
				buildDelay: 0,
				clearScreen: true,
				exclude: "node_modules/**",
			}
		},
		
		/*启动服务配置*/
		server:{
			// open:path.join(__dirname,`./src/views/${mode}/index.html`)
		}
	};
})
