const { createApp } = Vue

createApp({
	data: function () {
		return {
			message: 'Hello Vue!',
			className: 'text-sm',
			srcImage: 'https://www.nationalgeographic.it/upload/ngi-hero/gettyimages-660629130_1.jpg',
		}
	}
}).mount('#app')


