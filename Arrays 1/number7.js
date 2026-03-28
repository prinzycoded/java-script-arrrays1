function printTheProfile() {
  const profile = {
    firstName: "Prince",
    lastName: "Ugochukwu",
    age: 25,
    hobbies: ["Coding", "Football", "gym"],
  };

  console.log(`${profile.firstName} ${profile.lastName}`);
  console.log("Number of hobbies:", profile.hobbies.length);

  for (let i = 0; i < profile.hobbies.length; i++) {
    console.log(profile.hobbies[i]);
  }
}

printTheProfile();