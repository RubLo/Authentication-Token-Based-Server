const Authentication = require('./controllers/authentication.js');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session:false});7
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
    app.get('/', requireAuth, function(req,res){
        res.send();
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup',  Authentication.signup);
}