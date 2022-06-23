// Goal 3 estrelas 
//1.ir buscar botao

const tresEstrelas = document.getElementById('resposta-Assembly');

//1.2 ir buscar o sitio onde injetar conteudo

const explicacao=document.getElementById('explicacao');
//2.tenho que meter o elemento a escutar o meu click

tresEstrelas.addEventListener('click',(event)=>{
	//explicacao.innerHTML= "<strong> Nao muito bem </strong> 🌟🌟🌟"
	explicacao.innerHTML= "🌟🌟🌟"
})

// Goal 4 estrelas
const quatroEstrelas = document.querySelectorAll('.respostaQuatro');