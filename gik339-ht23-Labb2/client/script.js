async function fetchData() {
    const url = 'http://localhost:3000/users';
  
    try {
      // Part 1: Use the fetch() API to make a GET request to your server.
      const response = await fetch(url);
      const userData = await response.json();
  
      // Part 6: Create an array of user objects
      const userArray = userData.map(user => ({
        color: user.color,
        firstName: user.firstName,
        id: user.id,
        lastName: user.lastName,
        username: user.username,
        
      }));
  
      // Part 7: Console.log for verification
      console.log(userArray);
  
      // Add your code here to work with the userArray...
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();