class Photos{
	
	static clickOnButtonsImages(){
		
		document.querySelectorAll('#section button').forEach(value=>{
			
			switch(value.id){

				case 'all':
					
					value.addEventListener('click', event=>{

						exec.onOfStyle(value)
						exec.ImageSubst(

							'imagens/planta.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/estatua.jpg'
						 )

					})
					break
					
				case 'branding':

					value.addEventListener('click', event=>{
				
						exec.onOfStyle(value)
						exec.ImageSubst(

							'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg',
						 	'imagens/planta.jpg'
						 )

					})
					break

				case 'desing':

					value.addEventListener('click', event=>{

						exec.onOfStyle(value)
						exec.ImageSubst(

							'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/vasos.jpg'

						 )

					})
					break

				case 'marketing':

					value.addEventListener('click', event=>{
				
						exec.onOfStyle(value)
						exec.ImageSubst(

							'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg'
						 )

					})
					break

				case 'photography':

					value.addEventListener('click', event=>{
				
						exec.onOfStyle(value)
						exec.ImageSubst(

							'imagens/vasos.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/estatua.jpg',
						 	'imagens/vasos.jpg',
						 	'imagens/estatua.jpg'
						 )

					})
					break
			}
			
		})


	}//Fim do clickOnButtonsImages

}