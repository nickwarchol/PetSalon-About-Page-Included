function display(aPet){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=` Registered pets: ${saloon.pets.length}`;

    //assign a price for each service (TIP: you have to use if)
    //nails-> 15, shower, -> 20, hair -> 15, full ->25

    //clear the field
    //document.getElementById("pets").innerHTML="";

    //travel the pets array
    //for(var i=0;i<saloon.pets.length;i++){

        //assign a price for each service (TIP: you have to use if)
        //nails-> 15, shower, -> 20, hair -> 15, full ->25
        if(aPet.service==="nails"){
            aPet.price=15;
        }else if(aPet.service==="hair"){
            aPet.price=15
        }else if(aPet.service==="shower"){
            aPet.price=20;
        }else if(aPet.service==="full"){
            aPet.price=50;
        }

         //create a template
        var tmp = `<div id="${aPet.id}" class="pet">
        <h3>${aPet.name}</h3>
        <p> Age: ${aPet.age}</p>
        <p> Breed: ${aPet.breed}</p>
        <p> Gender: ${aPet.gender}</p>
        <p> Service: ${aPet.service}
        <p> Owner: ${aPet.owner}</p>
        <p> Phone: ${aPet.phone}</p>
        <p> Price: ${aPet.price}</p>
        <button onclick="deletePet(${aPet.id})">Delete</button>
        `;

        //var tmp=`<div class="pet"> 
        
    
     //concatenate all the info
     //document.getElementById("pets").innerHTML
    //+=tmp;
    document.getElementById("pets").innerHTML+=tmp;
        profitCalculation();
        
        }

    



//use the funt