(function() {
        const countdownDate = new Date("nov 14, 2025 23:59:59").getTime();

        const daysEl = document.getElementById("lto-days");
        const hoursEl = document.getElementById("lto-hours");
        const minutesEl = document.getElementById("lto-minutes");
        const secondsEl = document.getElementById("lto-seconds");
        const timerContainer = document.getElementById("lto-timer-container");

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !timerContainer) {
            console.error("Countdown timer elements not found.");
            return;
        }

        const countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                timerContainer.innerHTML = '<p id="lto-expired-message">This Offer Has Expired</p>';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            daysEl.textContent = days.toString().padStart(2, '0');
            hoursEl.textContent = hours.toString().padStart(2, '0');
            minutesEl.textContent = minutes.toString().padStart(2, '0');
            secondsEl.textContent = seconds.toString().padStart(2, '0');

        }, 1000);
    })();
    

