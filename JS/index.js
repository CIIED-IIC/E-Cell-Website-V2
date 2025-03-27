// JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreButton = document.getElementById('view-more-button');
    const hiddenStories = document.getElementById('hidden-stories');
    
    let storiesVisible = false;
    
    viewMoreButton.addEventListener('click', function() {
        if (!storiesVisible) {
            // Show the hidden stories
            hiddenStories.style.display = 'grid';
            viewMoreButton.textContent = 'Show Less';
            viewMoreButton.classList.add('active');
            
            // Smooth scroll to the first hidden story
            setTimeout(function() {
                const firstHiddenStory = hiddenStories.querySelector('.success-story-card');
                firstHiddenStory.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            storiesVisible = true;
        } else {
            // Hide the additional stories
            hiddenStories.style.display = 'none';
            viewMoreButton.textContent = 'View More Success Stories';
            viewMoreButton.classList.remove('active');
            
            // Scroll back to the main stories section
            const storiesSection = document.querySelector('.success-stories-section');
            storiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            storiesVisible = false;
        }
    });
});

// Smooth scrolling from home page

document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const knowMoreBtn = document.getElementById('know-more-btn');
    const applyBtn = document.getElementById('apply-btn');
    
    // Add click event listeners
    knowMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    applyBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const incubatorSection = document.getElementById('incubator-anchor');
      incubatorSection.scrollIntoView({ behavior: 'smooth' });
    });
  });