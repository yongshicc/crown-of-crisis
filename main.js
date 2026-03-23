/* ════════════════════════════════════════════════════
   main.js — Portfolio Site Data & Renderer

   ✏️  EDIT YOUR CONTENT inside DATA = { ... } below.
   The page rebuilds itself automatically from this data.
   Don't edit anything below the "END OF YOUR CONTENT" line.
════════════════════════════════════════════════════ */

const DATA = {

  site: {
    name:          "Your Name",
    logo:          "yoursite",
    tagline:       "Working through the night to bring wise ideas to light.",
    // Use <strong>...</strong> for bold inside intro / about
    intro:         "Hello! I'm <strong>Your Name</strong>, and I've been designing usable and delightful digital experiences—as well as writing and speaking about design—for almost 20 years.",
    portfolioNote: "I've designed and built marketing websites, digital products, apps, ecommerce experiences, and more.",
    about:         "As an independent designer I've been fortunate to work with brands like Twitter, Change.org, WordPress, ClassPass, the University of Pennsylvania, The Audubon Society, Adobe, and Toyota. I've also given workshops and lectures at dozens of industry conferences around the world, on topics ranging from advanced CSS techniques to the design process to user research.",
    contactIntro:  "I'm currently taking on new clients, and would love to hear about your project. Please include as much information as possible about the scope of your project, your timelines, and your budget.",
    email:         "hello@yoursite.com"
  },

  // Navigation links — shown in header and footer
  nav: [
    { label: "Home",    url: "index.html"   },
    { label: "Work",    url: "work.html"    },
    { label: "Words",   url: "words.html"   },
    { label: "About",   url: "about.html"   },
    { label: "Contact", url: "contact.html" }
  ],

  // Portfolio images — replace "image" with your own file paths or URLs
  // e.g. "image": "img/project-toyota.jpg"
  projects: [
    { alt: "Project 1 preview", image: "https://placehold.co/600x420/2a1f14/a8957e?text=Project+1", url: "projects/project-1.html" },
    { alt: "Project 2 preview", image: "https://placehold.co/600x420/1a2a1f/7ea895?text=Project+2", url: "projects/project-2.html" },
    { alt: "Project 3 preview", image: "https://placehold.co/600x420/1a1f2a/7e8ea8?text=Project+3", url: "projects/project-3.html" },
    { alt: "Project 4 preview", image: "https://placehold.co/600x420/2a1a22/a87e8e?text=Project+4", url: "projects/project-4.html" },
    { alt: "Project 5 preview", image: "https://placehold.co/600x420/1f2a1a/8ea87e?text=Project+5", url: "projects/project-5.html" },
    { alt: "Project 6 preview", image: "https://placehold.co/600x420/241a2a/957ea8?text=Project+6", url: "projects/project-6.html" }
  ],

  // Interviews & articles list
  interviews: [
    { source: "Dribbble's Overtime Podcast", title: "Adapting to the Modern Landscape of Web Design",            url: "https://dribbble.com" },
    { source: "The Adobe Create Blog",       title: "Balancing Form and Function: A Conversation",               url: "https://creativecloud.adobe.com" },
    { source: "The Yo! Podcast",             title: "An Interview with Rob Hope of One Page Love",               url: "https://yo.fm" },
    { source: "Case Study",                  title: "Helping Behavioral Scientists Create Behavior Change",      url: "https://medium.com" },
    { source: "Case Study",                  title: "Designing a Marketing Concept for a Financial Software Co", url: "https://medium.com" },
    { source: "Creative Bloq",               title: "Featured Interview: On the Business of Design",            url: "https://creativebloq.com" }
  ],

  // Social media links
  social: [
    { label: "Twitter",   url: "https://twitter.com" },
    { label: "Dribbble",  url: "https://dribbble.com" },
    { label: "Medium",    url: "https://medium.com" },
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Facebook",  url: "https://facebook.com" },
    { label: "LinkedIn",  url: "https://linkedin.com" }
  ]

};

/* ════════════════════════════════════════════════════
   END OF YOUR CONTENT — don't edit below this line
════════════════════════════════════════════════════ */

(function render() {
  const { site, nav, projects, interviews, social } = DATA;

  // Page title
  document.title = site.name + ' — Portfolio';

  // Logo (header + footer)
  ['site-logo', 'footer-logo'].forEach(id => {
    document.getElementById(id).textContent = site.logo;
  });

  // Navigation (header + footer)
  ['nav-list', 'footer-nav'].forEach(id => {
    const ul = document.getElementById(id);
    nav.forEach(item => {
      const li = document.createElement('li');
      const isCurrent = item.url === 'index.html' ? ' class="current"' : '';
      li.innerHTML = `<a href="${item.url}"${isCurrent}>${item.label}</a>`;
      ul.appendChild(li);
    });
  });

  // Hero
  document.getElementById('hero-tagline').textContent = site.tagline;
  document.getElementById('hero-intro').innerHTML     = site.intro;

  // Portfolio section
  document.getElementById('portfolio-note').innerHTML = site.portfolioNote;
  const grid = document.getElementById('portfolio-grid');
  projects.forEach(p => {
    grid.insertAdjacentHTML('beforeend',
      `<a class="portfolio-item" href="${p.url}">
        <img src="${p.image}" alt="${p.alt}" loading="lazy" />
      </a>`
    );
  });

  // About section
  document.getElementById('about-heading').textContent = `Hello, I'm ${site.name}.`;
  document.getElementById('about-body').innerHTML      = site.about;

  // Interviews / Articles
  const il = document.getElementById('interview-list');
  interviews.forEach(item => {
    il.insertAdjacentHTML('beforeend',
      `<li>
        <a href="${item.url}" target="_blank" rel="noopener">
          <span class="isource">${item.source}</span>
          <span class="ititle">${item.title}</span>
        </a>
      </li>`
    );
  });

  // Contact
  document.getElementById('contact-body').textContent = site.contactIntro;
  const cl = document.getElementById('contact-link');
  cl.textContent = `Email me at ${site.email}`;
  cl.href        = `mailto:${site.email}`;

  // Social links
  const sl = document.getElementById('social-list');
  social.forEach(s => {
    sl.insertAdjacentHTML('beforeend',
      `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`
    );
  });

  // Scroll-reveal: fade sections in as they enter the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
