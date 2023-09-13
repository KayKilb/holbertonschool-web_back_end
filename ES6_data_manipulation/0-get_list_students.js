function getListStudentIds(arr){
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      // If not, return an empty array
      return [];
    }

    // Return the array of student IDs
    return arr.map((obj) => obj.id);
  }
  
  export default getListStudentIds;
