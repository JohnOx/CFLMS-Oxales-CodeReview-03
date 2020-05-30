
var teamMembers = [{name:"Fran", email:"fran@index.com",image:".\..\assets\img\fran.png"},{name:"Bill",email:"bill@index.com",image:".\..\assets\img\bill.png"},
                    {name:"Fritz", email:"fritz@index.com",image:".\..\assets\img\fritz.png"}];


/*this shows only the last member of the list, was kinda trying out if this approach would workout in some way!*/
function teamAssemble () {
    for (var {name: n, email: e, image: p} of teamMembers) {
        displayOutput.innerHTML = 'Name: ' + n + ' eMail: ' + e  + p;
    }
}

document.getElementById("welcome").addEventListener("click",teamAssemble,false);




/*tried to extract the data from the array with a loop, but I am missing sth, which I have to figure out!*/
/*for (var i in teamMembers; i<= teamMembers.length - 1;i++) {
    console.log(i);
}*/


/*class Members {
    memberName = "";
    email = "";
    image = "";

    constructor(memberName, email, image) {
        this.memberName = memberName;
        this.email = email;
        this.image = image;
    }

    getMembers(i) {
        for(i=0; i<=Array.length-1;i++) {
            console.log(new Member);
        }
                    }
}*/

