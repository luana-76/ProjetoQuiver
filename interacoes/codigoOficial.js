class Ajus{

	constructor(){
		
		this.scrollEl = document.querySelector('ul#scroll');
		this.backEl = document.querySelector('#back');
		this.fastEl = document.querySelector('#fast');
		//this.searchEl = document.querySelector('input[type=search]').value
		this.incrM = 0;
		this.incrMe = 0;
		this.contc = 0;
		this.scroll = document.querySelector('#scroll').scrollWidth;
		this.initialize();

	}

	initialize(){
		
		this.scrollM()
		this.pags()
		this.contact()
		this.teste()

	}//Fim do initialize

	contact(){

			
			document.querySelector('#but').addEventListener('click', e=>{

				this.div = document.createElement('div');
				this.div.setAttribute('id', 'contactStyle');
				this.div.setAttribute('class', 'displayColumn');

				if(!this.contc){
					
					document.body.appendChild(this.div);
					this.div.innerHTML = `<button id='close' style='align-self: end; margin: 10px 10px 0 0;'><img src="https://img.icons8.com/ios-glyphs/20/000000/xbox-x.png"/></button>
									<form id='vas'>
										<h2>Contact</h2>
										<input type='text' placeholder='Name' maxlength='20'>
										<input type='email' placeholder = 'Email' maxlength='50'>
										<textarea maxlength='500' placeholder='Digite aqui'></textarea>
										<input type='submit' disabled><span style='font-size: 15px;margin-left: 5px;' id='menssage'>Preeencha os campos.</span>
									</form>
									`;

					this.contc++
						
					this.remove()
					this.submit()
					this.confg();
					

				};

			});


	}//Fim da rotina Contact.

	confg(){
		
			
			this.inter = setInterval(function(){
							if (!document.querySelector('input[type=text]').value||
								!document.querySelector('input[type=email]').value||
								!document.querySelector('textarea').value){

								document.querySelector('input[type=submit]').disabled = true
								

							}else{
												
								document.querySelector('input[type=submit]').disabled = false
								clearInterval(this.inter)

							}

						}, 1000)

		}		


	menssage(){
		
		var spanTag = document.getElementById('menssage');
		spanTag.innerHTML = 'Formulário enviado!'
		spanTag.style.color = 'green'
		setTimeout(e=>{spanTag.innerHTML = ''}, 2000)
		
	}

	submit(){

		/*document.addEventListener('submit', e=>{
				
			e.preventDefault()
			//document.querySelector('#vas').reset()
			//this.menssage();
			
			if(document.querySelector('#contactStyle')){

				document.querySelector('#vas').reset()
				this.confg();
				//document.querySelector('#contactStyle').remove()

			}else{
				
				console.log('ok')

			}
			
			clearInterval(this.inter)
							
		})*/

		
		document.addEventListener('submit', e=>{
				
			e.preventDefault()
			
			document.addEventListener('submit', this.removeL.bind(this))
		})
				

	}

	removeL(){
		

		if(document.querySelector('#contactStyle')){

				document.querySelector('#vas').reset()
				this.confg();
				//document.querySelector('#contactStyle').remove()

			}else{
				
				console.log('ok')

			}
			
			clearInterval(this.inter)
						
		document.removeEventListener('submit', this.removeL)


	}

	remove(){//Fechar página no x
		
		document.querySelector('#close').addEventListener('click', e=>{
			
			document.querySelector('#contactStyle').remove()
			this.contc = 0
			clearInterval(this.inter)

		})

	}

	scrollM(){

		/*this.backEl.addEventListener('click', event=>{
				
			if (this.incrMe != 0){
				this.incrMe -= 50
				this.scrollEl.scrollTo(this.incrMe, 0)
				this.incrM = 50
			}


			
		})

		this.fastEl.addEventListener('click', event=>{
				
				this.scrollEl.scrollTo(this.incrM, 0)
				this.incrM += 50
				this.incrMe = this.incrM - 50

		})*/

		this.fastEl.addEventListener('click', event=>{//Aumenta
				
				this.scrollEl.scrollTo(this.incrM, 0)
				if(this.increM != this.scroll){
					
					this.incrM += this.scroll / 5
					this.incrMe = this.incrM

				}

		})

		this.backEl.addEventListener('click', event=>{//Diminue
				
			if (this.incrMe != 0){
				this.incrMe -= this.scroll / 5
				this.scrollEl.scrollTo(this.incrMe, 0)
				this.incrM -= this.scroll / 5
			}


			
		})

		

	}//Fim do scroll

	onOff(eventMoment, font, background){

		document.querySelectorAll('#section button').forEach(but=>{
			
			but.style.background = '#fff'
			but.style.color = '#f1184a'

		})

		eventMoment.style.background = '#f1184a'
		eventMoment.style.color = '#fff'

	}//Fim do onOff

	trocF(linkOne, linkTwo, linkTree, linkFwo, linkFive, linkSix, linkSeven, linkEit, linkNine){

		document.querySelector('#scroll img#imgOne').src = linkOne
		document.querySelector('#scroll img#imgTwo').src = linkTwo
		document.querySelector('#scroll img#imgTree').src = linkTree
		document.querySelector('#scroll img#imgFwo').src = linkFwo
		document.querySelector('#scroll img#imgFive').src = linkFive
		document.querySelector('#scroll img#imgSix').src = linkSix
		document.querySelector('#scroll img#imgSeven').src = linkSeven
		document.querySelector('#scroll img#imgEit').src = linkEit
		document.querySelector('#scroll img#imgNine').src = linkNine

	}//Fim do trocF

	pags(){
		

		document.querySelectorAll('#section button').forEach(value=>{
			
			switch(value.id){

				case 'all':
					
					value.addEventListener('click', event=>{

						this.onOff(value)
						this.trocF(

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
				
						this.onOff(value)
						this.trocF(

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

						this.onOff(value)
						this.trocF(

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
				
						this.onOff(value)
						this.trocF(

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
				
						this.onOff(value)
						this.trocF(

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


	}//Fim do pags

	teste(){
		
		document.querySelector('input[type=search]').addEventListener('keypress', e=>{
			
			console.log(e.key)

		})

	}


}
