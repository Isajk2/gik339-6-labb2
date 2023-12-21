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