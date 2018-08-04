if(process.env.NODE_ENV === 'production'){
	module.exports = {mongoURI: 'mongodb://Jing:testtest123@ds155461.mlab.com:55461/vidjot-prod'}
}else{
	module.exports = {mongoURI: 'mongodb://localhost:27017/vidjot-dev'}
}