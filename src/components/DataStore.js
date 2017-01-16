/**
 * Created by VitorMaGo on 14/01/2017.
 */
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var userprefs = ["RTP1","TVI","RTPM","SPTV3"];
var tvlogs = [];

module.exports = {
    getPrefs: function() {
        return userprefs.concat();
    },

    subscribe: function(callback) {
        emitter.addListener('update', callback);
    },

    unsubscribe: function(callback) {
        emitter.removeListener('update', callback);
    },

    sendPrefs: function(newPrefs){
        userprefs.push(newPrefs);
        emitter.emit('update');
    }
};


/*newPref: function(preferencia) {
 userprefs.push(preferencia);
 emitter.emit('update');
 },

 removePref: funtion(whichPref){
 var somecanals = this.state.prefers;
 //  somecanals.forEach((itemo,u) =>{
 //      if(itemo==canal){
 //          somecanals.splice(u, 1);
 //          DataStore.removePrefs(itemo);
 },
 newLog: function(log){
 tvlogs.push(log);
 emitter.emit('update');
 }*/
// Em Prefs.js crio o objecto DataStore e com poderei ir buscar as prefs definidas pelo utilizador
// fazer um update a essas prefs, e apagar alguma delas.
// Em Main.js, tenho de is à DataStore.getPrefs para poder pedir à API da MEO quais os canais das Prefs.
// Em PlayStripe, ou Epp.js, tenho de aceder à DataStore para fazer update de tvlogs
