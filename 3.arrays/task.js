function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    return arr1.every((element, index) => element === arr2[index]);
  }

  function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    
    if (!filteredUsers.length) return 0;
  
    const totalAge = filteredUsers.reduce((sum, currentUser) => sum + currentUser.age, 0);
  
    return Math.round(totalAge / filteredUsers.length * 10) / 10; // округляем до одной цифры после запятой
  }