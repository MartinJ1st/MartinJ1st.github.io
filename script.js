document.addEventListener("DOMContentLoaded", () => {
  // Generate Navigation Links
  const navItems = ["Home", "About", "Experience", "Projects", "Hobbies", "Books", "Contact"];
  document.querySelector(".nav-links").innerHTML = navItems
    .map(item => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`)
    .join("");

  // Generate Social Icons
  const socialLinks = [
    { href: "https://www.linkedin.com/in/martin-janev1/", img: "./assets/linkedin.png", alt: "LinkedIn" },
    { href: "https://github.com/MartinJanev", img: "./assets/github.png", alt: "GitHub" },
    { href: "https://www.facebook.com/martin.furka04", img: "./assets/facebook.png", alt: "Facebook" },
    { href: "https://www.instagram.com/mjanev1/", img: "./assets/instagram.png", alt: "Instagram" },
    { href: "https://leetcode.com/u/user5945GR/", img: "./assets/leetcode.jpg", alt: "Leetcode" }
  ];
  document.getElementById("socials-container").innerHTML = socialLinks
    .map(link => `<a href="${link.href}" target="_blank"><img src="${link.img}" alt="${link.alt}" class="icon"></a>`)
    .join("");

  // Experience Section
  const experiences = {
    "IT": ["Java", "Python", "C++", "C#", "HTML", "CSS", "JavaScript", "TypeScript", "Angular"],
    "Volunteering": ["Scout Unit 'Equinox' Shtip", "Scout Association of Macedonia", "EESTEC LC Skopje"]
  };
  document.getElementById("experience-container").innerHTML = Object.entries(experiences)
    .map(([title, items]) => `
      <div class="details-container">
        <h2 class="experience-sub-title">${title}</h2>
        <div class="article-container">
          ${items.map(item => `<article><h3>${item}</h3></article>`).join("")}
        </div>
      </div>
    `)
    .join("");

  // Projects Section
  const projects = [
    { 
      title: "Tetris Project", 
      img: "./assets/tetris.jpg", 
      desc: "This is my high school matura project for the subject Informatics—a digital product that is a personal interpretation of the classic game 'Tetris'. Technologies used: C# in Unity.", 
      github: "https://github.com/MartinJanev/tetris-project" 
    },
    { 
      title: "Event Management System", 
      img: "./assets/ems.jpg", 
      desc: "Project for the subject <a href=\"https://www.finki.ukim.mk/subject/F23L1S146\" id=\"webDesign\">Fundamentals of Web Design</a>. This system allows creating and managing events (including RSVP functionality) using Angular and Firebase.", 
      github: "https://github.com/MartinJanev/event-management-system" 
    },
    { 
      title: "Lorem Ipsum", 
      img: "./assets/working.png", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit dolorem doloribus odio nam!", 
      github: "#" 
    },
    { 
      title: "Lorem Ipsum", 
      img: "./assets/working.png", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit dolorem doloribus odio nam!", 
      github: "#" 
    },
    { 
      title: "Lorem Ipsum", 
      img: "./assets/working.png", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit dolorem doloribus odio nam!", 
      github: "#" 
    },
    { 
      title: "Lorem Ipsum", 
      img: "./assets/working.png", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit dolorem doloribus odio nam!", 
      github: "#" 
    }
  ];
  document.getElementById("projects-container").innerHTML = projects
    .map(p => `
      <div class="details-container color-container">
        <div class="article-container">
          <img src="${p.img}" alt="${p.title}" class="project-img">
        </div>
        <h2 class="experience-sub-title project-title">${p.title}</h2>
        <p>${p.desc}</p>
        <div class="btn-container">
          <button class="btn btn-color-1 project-btn" onclick="location.href='${p.github}'">Link</button>
        </div>
      </div>
    `)
    .join("");

  // Hobbies Section
  const hobbies = [
    { 
      title: "Scouting", 
      img: "./assets/scout.png", 
      desc: "I've been a scout for over five years. Joining Boy Scouts taught me leadership, teamwork, and outdoor survival skills. Through various activities and camps, I have developed a deep appreciation for nature and learned the importance of community service. Check out the Scout Association's website <a href='https://izvidnici.mk/' id='izvidnik'>HERE</a>." 
    },
    { 
      title: "Sports", 
      img: "./assets/ball.png", 
      desc: "I played tennis professionally for 10 years and participated in running events like the Skopje Marathon Half-Marathon. My sports journey has instilled discipline, perseverance, and a passion for physical fitness. I'm currently preparing for another Half-Marathon, aiming to improve my personal best time." 
    },
    { 
      title: "Student Organizations", 
      img: "./assets/student.png", 
      desc: "Being part of student organizations has been instrumental in building my leadership and practical skills. My experience with EESTEC LC Skopje has provided me with opportunities to organize events, collaborate with peers, and develop valuable soft skills such as communication and project management. Check out their website: <a id='eestec' href='https://eestec.mk'>HERE</a>." 
    },
    { 
      title: "Books", 
      img: "./assets/book.png", 
      desc: "Reading is a daily practice that helps me continuously learn and grow. It expands my knowledge, sharpens critical thinking, and enhances empathy. I enjoy exploring various genres, from fiction to self-help, and believe that books are a powerful tool for personal development." 
    }
  ];
  document.getElementById("hobbies-container").innerHTML = hobbies
    .map(h => `
      <div class="details-container">
        <img src="${h.img}" alt="${h.title}" class="icon">
        <h3>${h.title}</h3>
        <p>${h.desc}</p>
      </div>
    `)
    .join("");

  // Books Section
  const books = {
    current: {
      title: "The Motivation Myth: How High Achievers Really Set Themselves Up to Win",
      img: "./assets/myth.jpg",
      link: "https://www.amazon.com/Motivation-Myth-Achievers-Really-Themselves/dp/0399563768",
      description: "Jeff Haden challenges the belief that motivation is innate. Instead, he shows that following clear, repeatable processes fuels success—whether you're trying to lose weight, run a marathon, or complete a major project.<br><br>“The Motivation Myth” argues that true motivation isn’t an instantaneous spark triggered by a dramatic moment, but rather a result of steady, disciplined progress. The book teaches that success is achieved through a systematic process of setting goals, building routines, and accumulating small wins, which then fuel further motivation in a self-reinforcing loop. It emphasizes focusing on the process and the journey—through planning, productive habits, and regular self-evaluation—rather than obsessing over the end goal. Ultimately, the fulfillment comes from the effort and growth you experience along the way, making the journey as rewarding as the destination."
    }
  };
  document.getElementById("books-container").innerHTML = `
    <div class="details-container">
      <h2 class="section__text__p2 ">Book I am reading right now</h2>
      <img src="${books.current.img}" class="book-img" alt="${books.current.title}">
      <div class="btn-container">
        <button class="btn btn-color-1" onclick="location.href='${books.current.link}'">Amazon Link</button>
      </div>
    </div>
    <div class="section__text__p1">
      <blockquote cite="${books.current.link}">
        <h3>${books.current.title}</h3>
        <p>${books.current.description}</p>
      </blockquote>
    </div>
  `;

  // Set Footer Copyright
  const dateNow = new Date();
  const currentYear = dateNow.getFullYear();
  document.getElementById("footer-copy").innerHTML = `Copyright &#169; ${currentYear} Martin Janev`;

  // Hamburger Menu: Toggle .active on .nav-links
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - 200;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky Navigation and Header Effects
  const header = document.getElementById("desktop-nav");
  const sticky = header.offsetTop;
  window.onscroll = function() {
    updateHeaderOnScroll();
  };

  function updateHeaderOnScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      if (window.pageYOffset > 80) {
        header.classList.add("glue");
        header.style.backgroundColor = "#2d8000";
        header.style.transition = "background-color 0.5s, color 0.5s";
        header.style.zIndex = "9999";
      }
    } else {
      header.classList.remove("sticky");
      header.classList.remove("glue");
      header.style.backgroundColor = "";
      header.style.color = "";
      header.style.transition = "background-color 0.5s, color 0.5s";
      header.style.zIndex = "";
    }
  }
});

// Back to Top Function
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
