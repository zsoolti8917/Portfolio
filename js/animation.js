

document.addEventListener('DOMContentLoaded', function() {
    // Target the .content__divider class
    gsap.from(".infobar", {
        y: -100,
        duration: 1,
        ease: "ower2.out",
        
    })
    
    
    gsap.from(".content__header-left >*, .bg-rings", {
        x: -1000, // Reduced from -1000 to -200 for less extreme movement
        duration: 1.2, // Increased to 1.2 seconds for smoother animation
        ease: "power2.out", // Changed to a less bouncy easing function
        scale: 0.9, // Modified to 0.9, as negative scale might not be visually appealing
        stagger: 0.15, // Reduced to 0.15 for quicker succession
        delay: 0.5 // Reduced delay to 0.5 seconds for quicker start
    });
    
    gsap.from(".content__header-right > img, .bg-circle", {
        x: 1000,
        duration: 1,
        ease: "power2.out",
        delay: 1
    
    })
    gsap.to('.content__divider', {
      duration: 1, // Animation time in seconds
      opacity: 1, // Final opacity
      ease: 'power3.out', // Easing function
      delay: 1
    });


    
      // Animate each knowledge-item individually
      const items = document.querySelectorAll('.knowledge-item');
      
      items.forEach((item, index) => {
        gsap.to(item, {
          duration: 1,
          opacity: 1,
          ease: 'power3.out',
          delay: 1.5 + index * 0.5 // Starts 1.5 seconds after page load, each subsequent item delayed by 0.5 seconds
        });
      });

      gsap.registerPlugin(ScrollTrigger);

      // Animate the main__content-title
      gsap.to('.main__content-header', {
        duration: 1,
        opacity: 1,
        ease: 'power3.out',
        delay: 1
      });
    
      // Animate projects in the left column (1st, 3rd, 5th, etc.)
      const leftProjects = document.querySelectorAll('.project:nth-child(odd)');
    
      leftProjects.forEach((project) => {
        gsap.fromTo(project, {
          x: '-100%',
        }, {
          duration: 1,
          x: '0%',
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });
      });
    
      // Animate projects in the right column (2nd, 4th, 6th, etc.)
      const rightProjects = document.querySelectorAll('.project:nth-child(even)');
    
      rightProjects.forEach((project) => {
        gsap.fromTo(project, {
          x: '100%',
        }, {
          duration: 1,
          x: '0%',
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });
      });

      gsap.fromTo('.header__footer', {
        y: 50,
      }, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.header__footer',
          start: 'top 80%',
          markers: false,
          toggleActions: 'play none none reverse'
        }
      });
    
      // Animate the Send Message button
      gsap.fromTo('.form__button', {
        y: 50,
      }, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.form__button',
          start: 'top 80%',
          markers: false,
          toggleActions: 'play none none reverse'
        }
      });
    
      // Animate the footer links
      gsap.fromTo('.bottom__footer-container', {
        y: 50,
      }, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.bottom__footer-container',
          start: 'top 80%',
          markers: false,
          toggleActions: 'play none none reverse'
        }
      });
  });





