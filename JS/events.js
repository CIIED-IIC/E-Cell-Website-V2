document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenEvents = document.getElementById('hidden-events');
    
    showMoreBtn.addEventListener('click', function() {
        if (hiddenEvents.classList.contains('hidden')) {
            hiddenEvents.classList.remove('hidden');
            showMoreBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
        } else {
            hiddenEvents.classList.add('hidden');
            showMoreBtn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
        }
    });
});