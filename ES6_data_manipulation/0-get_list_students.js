function getListStudents(studentArray) {
    // Check if the input is an array
    if (!Array.isArray(studentArray)) {
      // If not, return an empty array
      return [];
    }
  
    // Use the map function to extract student IDs from objects in the array
    const studentIds = studentArray.map((student) => student.id);
  
    // Return the array of student IDs
    return studentIds;
  }
  
  export default getListStudents;
