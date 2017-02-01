import { browserHistory } from 'react-router';
var code= window.localStorage.getItem("userToken");
console.log("userToken: ",code);
//var userCode= window.localStorage.getItem("userCode");
//console.log("userCode: ",userCode);
//window.localStorage.removeItem("codigo");
if(!code) {
    //console.log("Login no user");
    //window.localStorage.removeItem("userName");
    window.location.replace('http://samuelbf94.ddns.net/oauth/authorize?client_id=3&redirect_uri=http://localhost:3000/callback&response_type=code&scope');

}else{
    //sconsole.log("Login there's user: ", code);

    //window.localStorage.removeItem("codigo");
    /*
    window.localStorage.setItem("userName","Potyr");*/
    browserHistory.push('/home');
    //window.location.href('http://notifyme-react.ddns.net/registo');
}

/*samuelbf94
 .ddns.net/
 api/getpref/
 'cliente_id'
 ?*/