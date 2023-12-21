const url = "http://localhost:3000/users";

async function fetchUserData() {
  try {
    const response = await fetch(url);
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function displayUserData() {
  try {
    const users = await fetchUserData();
    const userTable = document.createElement("table");
    userTable.classList.add("user-table");

    const tableHead = document.createElement("tr");
    tableHead.innerHTML = 
    `
      <th>ID</th>
      <th>Användarnamn</th>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>Färg</th>
    `
    ;
    
    userTable.appendChild(tableHead);

    users.forEach((user) => {
      const userRow = document.createElement("tr");
      userRow.innerHTML = 
      `
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td style="background-color: ${user.color};">${user.color}</td>
      `
      ;
      userTable.appendChild(userRow);
    });

    const section = document.createElement("section");
    section.classList.add("user-section");
    section.appendChild(userTable);

    const main = document.querySelector("main");
    main.appendChild(section);
  } catch (error) {
    console.error("Error:", error);
  }
}
displayUserData();


/*
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
  
      // Skapar och hämtar lista
      const userList = document.createElement('div');
      userList.className = 'user-list';

      // Loopar användare och skapar item
      users.forEach(user => {
          const userItem = document.createElement('div');
          userItem.className = `user-list ${user.color}`;

          // Använder templatesträng och infogar användardata
          userItem.innerHTML = `
              ${user.firstName} ${user.lastName}
              Användarnamn: ${user.username}
              Favoritfärg: ${user.color}
          `;

          // Lägger till användare i listan
          userList.appendChild(userItem);
      });

      // Lägger till i DOM-trädet
      document.getElementById('user-list').appendChild(userList);
  } catch (error) {
      console.error('Error:', error);
  }
});
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();

  document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error('Nätverksresponsen var inte okej');
        }
        const users = await response.json(); */

        