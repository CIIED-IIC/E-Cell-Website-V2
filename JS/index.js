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

// Hamburger menu

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });