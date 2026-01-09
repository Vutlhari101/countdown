// CONFIGURATION
const startDate = new Date("2025-11-14T00:00:00");
const photoList = ['media/img1.jpg']; // Add your actual image names here

function updateAllTimers() {
    const now = new Date();

    // 1. CALCULATE DAYS TOGETHER (Count-Up)
    const diffInMs = now - startDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    document.getElementById('total-days-val').innerText = diffInDays;

    // 2. CALCULATE NEXT MONTHLY ANNIVERSARY (Countdown)
    let nextAnniv = new Date(now.getFullYear(), now.getMonth(), 14);
    
    // If today is past the 14th, the next one is next month
    if (now.getDate() >= 14) {
        nextAnniv.setMonth(nextAnniv.getMonth() + 1);
    }
    
    const timeLeft = nextAnniv - now;

    // Math for countdown
    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const m = Math.floor((timeLeft / 1000 / 60) % 60);
    const s = Math.floor((timeLeft / 1000) % 60);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('mins').innerText = m.toString().padStart(2, '0');
    document.getElementById('secs').innerText = s.toString().padStart(2, '0');
}

// 3. PHOTO SLIDESHOW LOGIC
let photoIndex = 0;
function rotatePhotos() {
    photoIndex = (photoIndex + 1) % photoList.length;
    const imgElement = document.getElementById('slideshow-img');
    const bgElement = document.getElementById('bg-slide');
    
    // Update both the profile pic and the blurred background
    imgElement.src = photoList[photoIndex];
    bgElement.style.backgroundImage = `url('${photoList[photoIndex]}')`;
}

// Initial calls
setInterval(updateAllTimers, 1000);
setInterval(rotatePhotos, 5000); // Changes photo every 5 seconds
updateAllTimers();
