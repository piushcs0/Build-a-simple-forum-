
  var page=0;
  
  function goBack() {
	if(page==2 || page==3){
		start();
	}
}
  
  function start(){
	  
	  page=1;
	  
	  let head="Post List";	
	document.getElementById('heading').innerHTML = head;;
	
	const url = 'https://jsonplaceholder.typicode.com/posts';
 
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {

    let piush = data;             
	let result=`these are some post`;
    return piush.map(function(author) {
		
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((resp1) => resp1.json())
		.then(function(data1) {
			let piush1 = data1;
			
			return piush1.map(function(author1) {
				if(author1.id==author.userId){
					//alert("fine11");

					result +=
						`<div>
							
							<ul class="w3-ul">
								<li>Title: <p1 id="sasa" onclick="indPost(${author.id})">${author.title}</p1> </li>
								<p1 id="author1.id" onclick="indUser(${author1.id})">${author1.username}</p1>
								<p>---------------------------------------------------------------------</p>
							</ul>
						</div>`;

					document.getElementById('result').innerHTML = result;
					
				}
			})
		})
		
		
	  
    })
  })
  .catch(function(error) {
    console.log(error);
  });
 }
 
 
 ///individual post
  
  function indPost(postid) {
	  
	  page=2;
	//alert("fine");
	
	let head="Post ";
		head+=postid;		
	document.getElementById('heading').innerHTML = head;;
	
	const url = 'https://jsonplaceholder.typicode.com/posts';
 
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {

    let piush = data;             
	let result=`individual post`;
    return piush.map(function(author) {
		
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((resp1) => resp1.json())
		.then(function(data1) {
			let piush1 = data1;
			
			return piush1.map(function(author1) {
				if(author1.id==author.userId && author.id==postid){
					//alert("fine11");

					result +=
						`<div>
							
							<ul class="w3-ul">
								<li>Title: ${author.title}</p1> </li>
								<p1>${author1.username}</p1>
								<p>---------------------------------------------------------------------</p>
							</ul>
						</div>`;

					document.getElementById('result').innerHTML = result;
					
				}
			})
		})
		
		
	  
    })
  })
 
  //alert("good");
  
  fetch('https://jsonplaceholder.typicode.com/comments')
	.then((resp) => resp.json())
	//.then(json => console.log(json))
	.then(function(data1) {
		let piush1 = data1; 
		let indpost=`coment detail`;
		return piush1.map(function(author1) {
			if(author1.postId==postid){
				
				
				indpost +=
						`<div>
							
							<ul class="w3-ul">
								<li> Subject: ${author1.name}</li>
								<ul>
									<li>comment:   ${author1.body} </li>
									<li> Email: ${author1.email}</li>
								</ul>
								
							</ul>
						</div>`;

					document.getElementById('indpost').innerHTML = indpost;
					
			
			}
		})	
	
		
	})
	
	//alert("good");
  }
  
  //const ull = document.getElementById('piush');
  function indUser(p) {
	  
	  page=3;
	
	let result=`detail `;
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((resp) => resp.json())
	//.then(json => console.log(json))
	.then(function(data) {
		let piush = data; 
		
		return piush.map(function(author) {
			if(author.id==p){
				let head="user ";
				head+=p;
				document.getElementById('heading').innerHTML = head;;
				
				result +=
						`<div>
							
							<ul class="w3-ul">
								<li> User Name: ${author.username}</li>
								<li>Name: ${author.name} </li>
								<li> Email: ${author.email}</li>
								<li> Website: ${author.website}</li>
								<li> Company Detail:
									<ul>
										<li>Name: ${author.company.name}</li>
										<li>catchPhrase: ${author.company.catchPhrase}</li>
										<li>bs: ${author.company.bs}</li>
									</ul>
								
							</ul>
						</div>`;

					document.getElementById('result').innerHTML = result;
					
					document.getElementById('indpost').innerHTML = "that all";
			
			}
		})	
	
		
	})
	
	
  }
 
 

 start();