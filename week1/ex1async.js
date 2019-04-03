var fs = require('fs')

console.log('Begin Reading File')
fs.readFile("input.txt", function(err,data){
	if (err) console.error(err)
		console.log(data.toString())
	console.log('Finish Reading File')
	console.log('Begin appending file')
	fs.appendFile("input.txt","Appending something",
		function(err){
		if (err) console.log(err)
			console.log('Finish appending file')
			console.log('Begin re-reading file')
			fs.readFile("input.txt", function(err,data){
				if (err) console.error(err)
					console.log(data.toString())
				console.log('Finish Re-reading file')
			})
	})

}
)
