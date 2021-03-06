const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// Load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

// Passport config
require('./config/passport')(passport);
// DB config
const db = require('./config/database');

// Map global promise - get rid of warning 
mongoose.Promise = global.Promise;
// Connect to mongodb
mongoose.connect(db.mongoURI, {
	useNewUrlParser: true
})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));


// Handlebars middleware
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method-override middleware
app.use(methodOverride('_method'));

// Express Session middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
}));

// Passport middleware 
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash middleware
app.use(flash());

// Global variables
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

// Index/Home Route
app.get('/', (req, res) => {
	const title = 'Welcome to VidJot';
	res.render('home', {
		title: title
	});
});

// About Page
app.get('/about', (req, res) => {
	res.render('about');
});

// Use routes
app.use('/ideas', ideas);
app.use('/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});