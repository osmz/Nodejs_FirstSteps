const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../routes/database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    // console.log(req.body)
    // console.log(username)
    // console.log(password)
    console.log(req.body);
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length > 0){
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
            //done(null, user, req.flash('success', 'Welcome ' + user.username));
            done(null, user);
            console.log('a');
        } else {
            //done(null, false, req.flash('message', 'Incorrect password'));
            done(null, false);
            console.log('b');
        }
    } else {
        //return done(null, false, req.flash('message', 'The usuername does not exists'));
        console.log('c');
        return done(null, false);
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    const { fullname } = req.body;
    const newUser = {
        username,
        password,
        fullname
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    console.log(result);  
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    // done(null, user.id);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    // done(null, rows[0]);
    done(null, rows[0]);
});