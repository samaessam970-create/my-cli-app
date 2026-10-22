0const classes = {
  "Arabic": [
    "sama",
    "basmala",
    "rokaia"
  ],
  "English": [
    "omar",
    "Youssef"
  ],
  "Computer Science": [
    "Adham",
    "ziad",
    "Ahmed"
  ]
};

console.log("=== CURRENT STUDENTS BY CLASS ===");

let totalStudents = 0;

for (const className in classes) {
  const students = classes[className];

  console.log(`\nClass: ${className}`);

  students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
  });

  totalStudents += students.length;
}

console.log("\nTotal classes:", Object.keys(classes).length);
console.log("Total students:", totalStudents);
0
