declare module '*?raw' {
	const content: string
	export default content
}

declare module '*.vue' {
	import {DefineComponent} from 'vue'
	const component: DefineComponent<object, object, any>
	export default component
}
