class Ajus{
	
	constructor(){
		
		this.eventsOfContantAndSubmit();
		this.contc; //contagem da tela de contato.
		Photos.clickOnButtonsImages();
		this.scrollbar();

		this.incrM = 0;
		this.incrMe = 0;
		this.contc = 0;
		
	}

	eventsOfContantAndSubmit(){

		document.querySelector('#but').addEventListener('click', event=>{
			
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
										</form>`;

				this.contc++

			};

			this.verification();
			this.contantRemove();

			this.contantForm = document.querySelector('#contactStyle'); 

		});//Fim do evento.

		document.addEventListener('submit', e=>{

			e.preventDefault();
			document.querySelector('#vas').reset();
			setTimeout(e=>{this.contantForm.remove()}, 1000);
			clearInterval(this.inter);//Excloi a verificação.
			this.contc = 0; //Pra quando a página for removida ela voltar a aparecer ao clicar no botão novamente.
			this.mensagemsubmit();
			
		});//Fim de evento

		document.addEventListener('keypress', e=>{
			
			if(e.key === 'Enter'){
				
				 document.querySelector('input[type=submit]').click();

			};

		});//Fim do evento
		
	};//Fechamento do Events
	
	contantRemove(){
		
		document.querySelector('#close').addEventListener('click', e=>{
			
			this.contantForm.remove();
			this.contc = 0;
			clearInterval(this.inter);

		});//Fim de evento

	};//Fim do contantRemove

	mensagemsubmit(){
		
		var msg = document.querySelector('#menssage');
		msg.innerHTML = 'Formulário enviado!';
		msg.style.color = 'green';
		
	};//Fim do mensagemsubmit

	verification(){

		var butSubmit = document.querySelector('input[type=submit]'); 

		this.inter = setInterval(function(){

			if (!document.querySelector('input[type=text]').value||
				!document.querySelector('input[type=email]').value||
				!document.querySelector('textarea').value){

				butSubmit.disabled = true;
				butSubmit.style.cursor = 'auto';		

			}else{
													
				butSubmit.disabled = false;
				clearInterval(this.inter);
				butSubmit.style.cursor = 'pointer';

			};

		}, 1000);

	};//Fim do verification

	onOfStyle(tagMoment){

		document.querySelectorAll('#section button').forEach(but=>{
			
			but.style.background = '#fff';
			but.style.color = '#f1184a';

		});

		tagMoment.style.background = '#f1184a';
		tagMoment.style.color = '#fff';

	};//Fim do onOffStyle(Style

	ImageSubst(imgOne, imgTwo, imgTree, imgFwo, imgFive, imgSix, imgSeven, imgEit, imgNine){

		document.querySelectorAll('#scroll img').forEach(e=>{
			
			switch(e.id){
				
				case 'imgOne':

					e.src = imgOne;
					break
						
				case 'imgTwo':
					
					 e.src = imgTwo;
					 break
				
				case 'imgTree':

					 e.src = imgTree;
					 break
				
				case 'imgFwo':
					
					 e.src = imgFwo;
					 break
				
				case 'imgFive':
					
					 e.src = imgFive;
					 break
				
				case 'imgSix':
					
					 e.src = imgSix;
					 break
				
				case 'imgSeven':
					
					 e.src = imgSeven;
					 break
				
				case 'imgEit':
					
					 e.src = imgEit;
					 break
				
				case 'imgNine':

					 e.src = imgNine;
					 break
				

			};

		});

	};//Fim do ImageSubst

	scrollColor(conts, tagMoment){

		var list = [...document.querySelectorAll('div#buts button')]

		list.forEach(tag=>{
			
			switch(tag){

				case list[1]:
					
					if (conts === 0){

						tag.style.background = '#f1184a';

					}else{
						
						tag.style.background = '#c7c6c2';
						
					}
					break
				case list[2]:

					if (conts === 1){

						tag.style.background = '#f1184a';

					}else{
						
						tag.style.background = '#c7c6c2';
						
					}
					break
				case list[3]:

					if (conts === 2){

						tag.style.background = '#f1184a';

					}else{
						
						tag.style.background = '#c7c6c2';
						
					}
					break

				case list[4]:

					if (conts === 3){
						tag.style.background = '#f1184a';

					}else{
						
						tag.style.background = '#c7c6c2';
						
					}
					break

				case list[5]:

					if (conts === 4){
						tag.style.background = '#f1184a';

					}else{
						
						tag.style.background = '#c7c6c2';

					}
					break
			}

		})

	}

	//reveja essa parte

	scrollbar(){
		
		var nextEl = document.querySelector('#next');
		var backEl = document.querySelector('#back');
		var scrollEl = document.querySelector('#scroll');
		var endScroll = scrollEl.scrollTo(scrollEl.scrollWidth, 0);//Pegando o valor total do scroll.
		var incre = 0;
		var widthScroll;
		var cont = 0;

		if(document.body.clientWidth <= 912){

			document.querySelector('#buts').style.display = 'none'
			console.log('ok')
			
		}else{
			
			setTimeout(e=>{

				widthScroll = scrollEl.scrollLeft//Pegando o valor total do scroll.
				endScroll = scrollEl.scrollTo(0, widthScroll);
				
			 }, 3000);

			next.addEventListener('click', e=>{

				if(cont < 4) cont++
				this.scrollColor(cont)
			
				if(incre < widthScroll){
					
					//incre += 100
					incre += 150
					scrollEl.scrollTo(incre, 0)

				}				

			});

			back.addEventListener('click', e=>{

				if(incre != 0){

					if(cont > 0)cont--
					this.scrollColor(cont)
					incre -= 150
					scrollEl.scrollTo(incre, 0)

				}
					
			});


		}//Fim do if
		

	};//Fim do scrollbar

}

window.exec = new Ajus()