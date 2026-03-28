function printstafflist() {
    let staff = [
  { name: "Amara", department: "Sales", salary: 120000 },
  { name: "wendy", department: "Tech", salary: 250000 },
  { name: "prince", department: "Sales", salary: 135000 },
  { name: "Dele", department: "Tech", salary: 31000 }
];
    for (let i =0; i < staff.length; i++) {
        if (staff[i].department === "Tech") {
            console.log (staff[i].name);
        }
       let highestPaid = staff[0];
  for (let i = 1; i < staff.length; i++) {
    if (staff[i].salary > highestPaid.salary) {
      highestPaid = staff[i];
    }
  }
  console.log("Highest paid:", highestPaid.name, "-", highestPaid.salary);
}
}
printstafflist();
