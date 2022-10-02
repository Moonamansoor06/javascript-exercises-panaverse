


var current_users = ["Saima", "Hasan", "Moiz", "Murtaza"];
var new_users = ["Asim", "Saima", "Moiz", "Sarim", "Shakaib", "hasan"];



    for ( var i = 0; i < current_users.length; i++ ) {
        for ( var j = 0; j < new_users.length; j++ ) {
            if ( current_users[i].toLowerCase().includes( new_users [j].toLowerCase() )) console.log(`${new_users[j]} already exists`) ;
        }
    }
