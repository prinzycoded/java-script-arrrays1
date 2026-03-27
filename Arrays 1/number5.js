function printobjucts() {
    let arrayname  = [ "John", "Jane", "Doe", "Smith"]; 
    let arrayscore = [ 85, 90, 78, 92];
    let arrayage = [ 20, 22, 19, 21];

for (let i = 0 ; i < arrayname.length; i++) {
    let student = {
        name: arrayname[i],
        score: arrayscore[i],
        age: arrayage[i]
    };
    console.log(student.name + " scored " + student.score + " at the age of " + student.age);
}

}
printobjucts();


  

