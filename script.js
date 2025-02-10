let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let autoSlide = setInterval(() => moveSlide(1), 3000); // Auto-slide every 3s

        function moveSlide(direction) {
            slides[currentIndex].classList.remove("active");
            currentIndex += direction;
            
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            slides[currentIndex].classList.add("active");

            // Reset autoplay timer when manually clicked
            clearInterval(autoSlide);
            autoSlide = setInterval(() => moveSlide(1), 3000);
        }
