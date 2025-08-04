document.addEventListener('DOMContentLoaded', function() {
    
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

   
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

   
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

   
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

 
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

 
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        speed: 800,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });

    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          
            filterBtns.forEach(btn => btn.classList.remove('active'));
        
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

  
    const menuData = [
        {
            id: 1,
            title: "Classic Bruschetta",
            price: "$8.50",
            desc: "Toasted bread topped with tomatoes, garlic, fresh basil and olive oil",
            img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            category: "starters"
        },
        {
            id: 2,
            title: "Crispy Calamari",
            price: "$12.00",
            desc: "Tender squid lightly fried with lemon aioli and marinara sauce",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            category: "starters"
        },
        {
            id: 3,
            title: "Filet Mignon",
            price: "$32.00",
            desc: "8oz grass-fed beef tenderloin with roasted potatoes and seasonal vegetables",
            img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            category: "mains"
        },
        {
            id: 4,
            title: "Truffle Pasta",
            price: "$24.50",
            desc: "Homemade fettuccine with wild mushrooms, truffle oil and parmesan",
            img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80",
            category: "mains"
        },
        {
            id: 5,
            title: "Chocolate Lava Cake",
            price: "$9.00",
            desc: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            category: "desserts"
        },
        {
            id: 6,
            title: "New York Cheesecake",
            price: "$8.50",
            desc: "Classic creamy cheesecake with berry compote",
            img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80",
            category: "desserts"
        },
        {
            id: 7,
            title: "Signature Cocktails",
            price: "$12.00",
            desc: "Ask your server about our seasonal craft cocktails",
            img: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            category: "drinks"
        },
        {
            id: 8,
            title: "Wine Selection",
            price: "$9.00+",
            desc: "Extensive wine list featuring local and international selections",
            img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            category: "drinks"
        }
    ];

  
    const menuContainer = document.querySelector('.menu-items');
    
    function loadMenuItems() {
        let menuHTML = '';
        
        menuData.forEach(item => {
            menuHTML += `
                <div class="menu-item" data-category="${item.category}">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.title}</h3>
                            <span class="price">${item.price}</span>
                        </div>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;
        });
        
        menuContainer.innerHTML = menuHTML;
    }
    
    loadMenuItems();


    const galleryData = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            title: "Restaurant Interior"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            title: "Dining Area"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            title: "Bar Area"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            title: "Food Presentation"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            title: "Chef's Special"
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            title: "Dessert"
        }
    ];

   
    const galleryContainer = document.querySelector('.gallery-grid');
    
    function loadGalleryItems() {
        let galleryHTML = '';
        
        galleryData.forEach(item => {
            galleryHTML += `
                <div class="gallery-item">
                    <img src="${item.img}" alt="${item.title}">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;
        });
        
        galleryContainer.innerHTML = galleryHTML;
    }
    
    loadGalleryItems();

 
    const testimonialsData = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Food Critic",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Vignan Foods offers an exceptional dining experience. The flavors are authentic and the presentation is impeccable. Highly recommended!",
            rating: 5
        },
        {
            id: 2,
            name: "Priya Patel",
            role: "Regular Customer",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "I've been coming here for years and the quality never disappoints. The service is outstanding and the ambiance is perfect for any occasion.",
            rating: 5
        },
        {
            id: 3,
            name: "Arjun Reddy",
            role: "Food Blogger",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "The innovative menu at Vignan Foods combines traditional flavors with modern techniques. A must-visit for any food enthusiast.",
            rating: 4
        },
        {
            id: 4,
            name: "Neha Gupta",
            role: "First-time Visitor",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "From the moment we walked in, we were treated like royalty. The food was divine and the wine pairing suggestions were perfect.",
            rating: 5
        }
    ];

   
    const testimonialsContainer = document.querySelector('.testimonials-slider .swiper-wrapper');
    
    function loadTestimonials() {
        let testimonialsHTML = '';
        
        testimonialsData.forEach(item => {
            let stars = '';
            for (let i = 0; i < item.rating; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            testimonialsHTML += `
                <div class="swiper-slide">
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <p class="testimonial-text">${item.text}</p>
                            <div class="testimonial-author">
                                <div class="testimonial-img">
                                    <img src="${item.img}" alt="${item.name}">
                                </div>
                                <div class="testimonial-info">
                                    <h4>${item.name}</h4>
                                    <span>${item.role}</span>
                                    <div class="testimonial-rating">
                                        ${stars}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        testimonialsContainer.innerHTML = testimonialsHTML;
    }
    
    loadTestimonials();

    
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
      
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const occasion = document.getElementById('occasion').value;
        const requests = document.getElementById('requests').value;
        
      
        if (!name || !email || !phone || !date || !time || !guests) {
            alert('Please fill in all required fields');
            return;
        }
        
      
        console.log('Booking submitted:', {
            name,
            email,
            phone,
            date,
            time,
            guests,
            occasion,
            requests
        });
        
        
        alert('Thank you for your reservation! We will contact you shortly to confirm your booking.');
        
     
        bookingForm.reset();
    });

 
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
      
        console.log('Newsletter subscription:', email);
        
        
        alert('Thank you for subscribing to our newsletter!');
        
      
        this.reset();
    });

    
    gsap.registerPlugin(ScrollTrigger);
    
   
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
  
    gsap.utils.toArray('.menu-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    
    gsap.utils.toArray('.chef-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});