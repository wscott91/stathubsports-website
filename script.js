document.addEventListener('DOMContentLoaded', function () {
   fetch('data.json')  // Fetch the JSON data
     .then(response => response.json())  // Parse the JSON
     .then(data => {
       const teamsContainer = document.getElementById('teams-container');
       data.teamsOnBye.forEach(team => {
         const teamDiv = document.createElement('div');
         teamDiv.className = 'team';
 
         const teamName = document.createElement('h2');
         teamName.textContent = team.displayName;
 
         const teamLogo = document.createElement('img');
         teamLogo.src = team.logo;
         teamLogo.alt = team.displayName;
 
         teamDiv.appendChild(teamName);
         teamDiv.appendChild(teamLogo);
 
         teamsContainer.appendChild(teamDiv);
       });
     })
     .catch(error => console.error('Error fetching data:', error));
 });
 