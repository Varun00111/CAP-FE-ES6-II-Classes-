const studentGrades = [
    {
      grade: "V",
      students: [
        { name: "Nrupul", marks: [10, 20, 30] },
        { name: "Prateek", marks: [20, 30, 40] }
      ]
    },
    {
      grade: "VI",
      students: [
        { name: "Aman", marks: [10, 20, 30] },
        { name: "Albert", marks: [20, 30, 40] }
      ]
    },
    {
      grade: "VII",
      students: [
        { name: "Yogesh", marks: [10, 20, 30] },
        { name: "Sandhya", marks: [20, 30, 40] }
      ]
    }
  ];
  
  // Iterate through each grade
  for (const gradeData of studentGrades) {
    const { grade, students } = gradeData;
  
    let highestScorer = null;
    let highestScore = -1;
  
    // Iterate through each student in the grade
    for (const student of students) {
      const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
  
      // Check if the current student has a higher total score
      if (totalMarks > highestScore) {
        highestScorer = student.name;
        highestScore = totalMarks;
      }
    }
  
    // Print the result for the current grade
    console.log(`${grade}-${highestScorer}-${highestScore}`);
  }
  