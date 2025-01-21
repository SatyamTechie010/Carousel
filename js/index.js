// const cardContainer = document.getElementById('cardContainer');
//       const prevBtn = document.getElementById('prevBtn');
//       const nextBtn = document.getElementById('nextBtn');

//       let currentIndex = 0;
//       const cardWidth = document.querySelector('.card').offsetWidth + 15; // Card width + margin

//       nextBtn.addEventListener('click', () => {
//         if (currentIndex < cardContainer.children.length - 3) {
//           currentIndex++;
//           cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//         }
//       });

//       prevBtn.addEventListener('click', () => {
//         if (currentIndex > 0) {
//           currentIndex--;
//           cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//         }
//       });

  
      

      const cardContainer = document.getElementById('cardContainer');
      const cards = document.querySelectorAll('.card');
      let currentIndex = 0;
      
      function updateSlider() {
        cards.forEach((card, index) => {
          if (index === currentIndex) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      
        // Adjust the translate3d value to center the active image
        const translateX = -currentIndex * (cardContainer.offsetWidth / cards.length);
        cardContainer.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
      
      // Event listeners for buttons
      document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
      });
      
      document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
      });
      
      // Initialize the slider
      updateSlider();
      