   // Velg et tilfeldig bilde som er det riktige
   const correctImage = Math.floor(Math.random() * 3) + 1; // 1, 2 eller 3

   function checkImage(imageNumber) {
       const imageBoxes = document.querySelectorAll('.skattekister-bilde');

       if (imageNumber === correctImage) {
           // Endre bildet til en åpen kiste med penger
           imageBoxes[imageNumber - 1].innerHTML = `
               <img src="img_escaperoom/skattekiste_opnett_escaperoom.png" alt="Åpen skattekiste med penger">
           `;
           document.getElementById('message').textContent = 'Gratulerer, du fant skatten!';
       } else {
           // Hvis feil bilde, last siden på nytt
           alert('Feil skattekiste! Spillet starter på nytt...');
           window.location.reload(); // Last siden på nytt
       }
   }