$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=91801ad9bb3e40be8ec9a9c63bbbbbe2",

	success: function(data){

		for(let i = 1; i <= 9; i++){
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<h1 class="author">${data.articles[i].author}</h1>
			<div>
			<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>
			</div>
			</div>
			`
		}
		
	},

	error: function(error){
		console.log(error);
	}

})

$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=91801ad9bb3e40be8ec9a9c63bbbbbe2",
	success: function(data){
		for(let i = 1; i <= 9; i++){			
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<h1 class="author">${data.articles[i].author}</h1>
			<div>
			<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>
			</div>
			</div>
			`
		}
		
	},

	error: function(error){
		console.log(error);
	}

})

$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=91801ad9bb3e40be8ec9a9c63bbbbbe2",
	success: function(data){
		for(let i = 1; i <= 9; i++){			
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<h1 class="author">${data.articles[i].author}</h1>
			<div>
			<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-outline-dark btn-sm">Read More</button></a>
			</div>
			</div>
			`
		}
		
	},

	error: function(error){
		console.log(error);
	}

})


