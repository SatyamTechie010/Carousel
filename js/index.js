const cardContainer = document.getElementById('cardContainer');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      let currentIndex = 0;
      const cardWidth = document.querySelector('.card').offsetWidth + 15; // Card width + margin

      nextBtn.addEventListener('click', () => {
        if (currentIndex < cardContainer.children.length - 3) {
          currentIndex++;
          cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
      });