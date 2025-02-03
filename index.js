const steamUser = require('steam-user');
const steamTotp = require('steam-totp');

var username = 'username';
var password = 'password';
var shared_secret = '';

var games = [730, 218, 221100];
var status = 1


user = new steamUser();
user.logOn({accountName: username, password: password, twoFactorCode: steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () =>{
    if (user.steamID != null) console.log(user.steamID + 'Logged in');
        user.setPersona(status);
        user.gamesPlayed(games);
    });
