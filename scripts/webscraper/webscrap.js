class Election {
    constructor(name, date, candidates) {
        this.name = name;
        this.date = date;
        this.candidates = candidates;
    }
}


function createElectionPinecrest() {
    let date = document.querySelector("#widget_3_2816_2710 > h1 > span").textContent.split(" M");
    let position = document.querySelectorAll("strong");
    let positions = [];
    let poopy = [];
    let elections = [];




    for (i = 0; i < position.length; i++) {
        positions.push(position[i].textContent);
    }

    for (i = 0; i < positions.length; i++) {
        poopy.push(positions[i].replace(" ", ""));
    }

    // for (i = 0; i < positions.length; i++) {
    //     let seat1 =
    // }

    // for (i = 0; i < positions.length; i++) {
    //     eval(`let ${poopy[i]} = new Election("${positions[i]}", "${date[0]}", "people");`);
    //     console.log(`${poopy[i]}`);
    // }



    // return elections;
    return positions;
}


function getCandidates() {
    let table = document.querySelector("#widget_4_2815_2710 > div > table");
    let candidates = [];
    let temp = [];

    // for (var i = 0, row; row = table.rows[i]; i++) {
    //     //iterate through rows
    //     //rows would be accessed using the "row" variable assigned in the for loop
    //     let temp = [];
    //     console.log("Hello");

        //TODO this if isn't working.
        // if (document.activeElement.querySelector("p a")) { 
        for (let i = 2, yes; i < 9; i++){
            let tr = document.querySelector(`#widget_4_2815_2710 > div > table > tbody > tr:nth-child(${i}) > td:nth-child(1) > p > a`);
            console.log("hellow orld");
            if(tr){
                // console.log(tr.textContent);
                temp.push(tr.textContent);
                
            }else {
                console.log(temp);
                candidates.push(temp);
                temp = [];
                console.log(temp);

            }
            
        }
       
        // for (var j = 0, col; col = row.cells[j]; j++) {
        
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        // temp.push(document.activeElement.querySelector("p a").textContent);
        // console.log("I'm Working");
        // console.log(temp);
        // // }
        // candidates.push(temp)
        // // } 
        return candidates;
    }
   
