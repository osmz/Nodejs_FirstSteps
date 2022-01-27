
var check18 = 'old';

function old_young(id){
    var el = document.getElementById(id);
    if (check18 == 'old'){
        el.className = el.className.replace( /(?:^|\s)bi-toggle-on(?!\S)/g , ' bi-toggle-off' );
        check18 = 'young';
    } else{
        el.className = el.className.replace( /(?:^|\s)bi-toggle-off(?!\S)/g , ' bi-toggle-on' );
        check18 = 'old';
    }  
}

function show_password(id1,id2){
    var el1 = document.getElementById(id1);
    var el2 = document.getElementById(id2);
    if (el1.type == 'password'){
        el1.type = "text";
        el2.className = el2.className.replace( /(?:^|\s)bi-eye-fill(?!\S)/g , ' bi-eye-slash-fill' );
    } else{
        el1.type = "password";
        el2.className = el2.className.replace( /(?:^|\s)bi-eye-slash-fill(?!\S)/g , ' bi-eye-fill' );
    }
    
}


