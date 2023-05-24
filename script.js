//your code here
  
  let button = document.getElementById('addTodoBtn');
  let list = document.getElementById('todoList');

button.addEventListener('click',addingtodo);

  function addingtodo() {
	let input = document.getElementById('newTodoInput').value.trim();
	  if(input!==""){
	 let li =document.createElement('li') ;
	  li.innerText = input;
     list.appendChild(li);
	document.getElementById('newTodoInput').value="";
	  }
  }