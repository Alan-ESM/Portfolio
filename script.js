document.addEventListener('DOMContentLoaded', function () {

    // ===================== SKILLS DATA =====================
    const skills = {
        html: {
            name: "HTML",
            icon: "fab fa-html5",
            category: "web",
            level: 90,
            color: "#e44d26",
            description: "HTML5 est la colonne vertébrale du web moderne. Je maîtrise la sémantique avancée (balises article, section, aside, figure), l'accessibilité ARIA, les formulaires complexes, les attributs data, le SEO on-page et les métadonnées Open Graph. J'ai utilisé HTML pour structurer le site de présentation de l'Institut Universitaire de KEYCE avec des balises sémantiques rigoureuses.",
            tags: ["HTML5", "Sémantique", "SEO", "Accessibilité"]
        },
        css: {
            name: "CSS",
            icon: "fab fa-css3-alt",
            category: "web",
            level: 88,
            color: "#264de4",
            description: "CSS3 me permet de créer des interfaces visuellement saisissantes. Je maîtrise Flexbox, CSS Grid, les animations @keyframes, les transitions, les variables CSS (custom properties), les pseudo-éléments, le design responsive avec media queries, et les effets avancés comme backdrop-filter et clip-path. Mes portfolios démontrent mon niveau en design moderne.",
            tags: ["CSS3", "Flexbox", "Grid", "Animations", "Responsive"]
        },
        js: {
            name: "JavaScript",
            icon: "fab fa-js-square",
            category: "web",
            level: 82,
            color: "#f7df1e",
            description: "JavaScript ES6+ est mon langage principal pour l'interactivité web. Je maîtrise les closures, Promises, async/await, fetch API, manipulation du DOM, événements, localStorage/sessionStorage, les modules ES6 et les classes. J'ai développé des composants dynamiques comme des carrousels, formulaires interactifs et interfaces temps réel.",
            tags: ["ES6+", "DOM", "Async/Await", "Fetch API", "LocalStorage"]
        },
        php: {
            name: "PHP",
            icon: "fab fa-php",
            category: "backend",
            level: 70,
            color: "#8993be",
            description: "PHP est mon langage de prédilection côté serveur. Je sais créer des scripts dynamiques, gérer des sessions, des cookies, des formulaires POST/GET sécurisés, interagir avec des bases de données via PDO, et structurer des applications MVC simples. Je maîtrise également la création d'APIs REST basiques et la gestion des erreurs. Je développe activement mes compétences en PHP 8 avec les types stricts, les attributs et les fibres.",
            tags: ["PHP 8", "PDO", "Sessions", "MVC", "REST", "Sécurité"]
        },
        c: {
            name: "C",
            icon: "fas fa-terminal",
            category: "backend",
            level: 75,
            color: "#a8b9cc",
            description: "Le langage C m'a appris les fondamentaux de la programmation : gestion de la mémoire, pointeurs, structures, tableaux dynamiques, fichiers. J'ai développé un mini jeu en C avec boucle de jeu, gestion des scores et logique algorithmique. Cette expérience m'a donné une compréhension profonde du fonctionnement bas niveau des programmes.",
            tags: ["Pointeurs", "Mémoire", "Structures", "Fichiers", "Algorithmes"]
        },
        cpp: {
            name: "C++",
            icon: "fas fa-code",
            category: "backend",
            level: 72,
            color: "#00599c",
            description: "C++ m'a permis de maîtriser la programmation orientée objet : classes, héritage, polymorphisme, encapsulation, templates et surcharge d'opérateurs. J'ai réalisé une application de gestion de stock complète mettant en œuvre ces concepts avec persistance de données. La gestion manuelle de la mémoire avec new/delete m'a renforcé ma rigueur.",
            tags: ["POO", "Classes", "Héritage", "STL", "Templates"]
        },
        csharp: {
            name: "C#",
            icon: "fas fa-hashtag",
            category: "backend",
            level: 65,
            color: "#9b59b6",
            description: "C# est un langage puissant de l'écosystème .NET que je développe activement. Je maîtrise la syntaxe orientée objet, LINQ pour la manipulation de données, les delegates, events et lambdas. Je m'initie à ASP.NET Core pour le développement d'APIs et d'applications web, ainsi qu'à Windows Forms pour les interfaces desktop. C# est un pilier des applications d'entreprise modernes.",
            tags: ["C# .NET", "LINQ", "ASP.NET", "WinForms", "OOP"]
        },
        java: {
            name: "Java",
            icon: "fab fa-java",
            category: "backend",
            level: 68,
            color: "#e76f00",
            description: "Java est le langage enterprise par excellence. Je maîtrise la POO avancée, les collections (ArrayList, HashMap, LinkedList), les interfaces fonctionnelles, les streams Java 8+, la gestion des exceptions et la concurrence de base. Je développe des applications console structurées en MVC et m'initie au framework Spring Boot pour des APIs REST robustes et scalables.",
            tags: ["Java 17", "Collections", "Streams", "Spring Boot", "Maven"]
        },
        ux: {
            name: "UX Design",
            icon: "fas fa-pencil-ruler",
            category: "web",
            level: 74,
            color: "#ff6b6b",
            description: "L'UX (User Experience) Design me permet de concevoir des interfaces centrées sur l'utilisateur. Je pratique le wireframing, le prototypage et les tests utilisateurs. Je maîtrise les principes de hiérarchie visuelle, d'affordance, de loi de Fitts et de Gestalt. J'utilise Figma pour créer des maquettes interactives avant de coder, ce qui optimise le développement et améliore l'expérience finale.",
            tags: ["Figma", "Wireframing", "Prototypage", "Accessibilité", "UX Research"]
        },
        gbd: {
            name: "Bases de données",
            icon: "fas fa-database",
            category: "backend",
            level: 78,
            color: "#1abc9c",
            description: "La gestion de bases de données est fondamentale dans mes projets. Je maîtrise MySQL et PostgreSQL : modélisation entité-relation, normalisation (1NF à 3NF), requêtes SQL avancées (JOIN, sous-requêtes, vues, procédures stockées), indexation et optimisation des performances. Je suis aussi familier avec les bases NoSQL comme MongoDB pour des données non structurées.",
            tags: ["MySQL", "PostgreSQL", "MongoDB", "SQL Avancé", "Modélisation"]
        },
        vba: {
            name: "VBA",
            icon: "fas fa-file-excel",
            category: "outils",
            level: 80,
            color: "#27ae60",
            description: "VBA (Visual Basic for Applications) est ma spécialité pour l'automatisation bureautique. J'ai créé des macros Excel complexes : formulaires UserForm, boucles, conditions, gestion des fichiers, connexion à des bases de données Access et génération automatique de documents Word. Mon application de gestion de famille et mon carrousel VBA illustrent ma maîtrise.",
            tags: ["Excel Macros", "UserForms", "Access", "Automation", "Word VBA"]
        },
        apirest: {
            name: "API REST",
            icon: "fas fa-network-wired",
            category: "backend",
            level: 70,
            color: "#3498db",
            description: "Les APIs REST sont le socle des architectures web modernes. Je comprends et implémente les principes REST : stateless, ressources, verbes HTTP (GET, POST, PUT, DELETE, PATCH), codes de statut et format JSON. J'utilise Postman pour tester les APIs et je sais consommer des APIs tierces avec fetch/axios en JavaScript. Je m'initie à la création d'APIs avec PHP et Node.js, incluant authentification JWT et gestion CORS.",
            tags: ["REST", "HTTP", "JSON", "Postman", "JWT", "CORS"]
        },
        cyber: {
            name: "Cybersécurité",
            icon: "fas fa-shield-alt",
            category: "systeme",
            level: 62,
            color: "#e74c3c",
            description: "La cybersécurité est un domaine que j'explore avec intérêt croissant. Je connais les principales vulnérabilités OWASP (injection SQL, XSS, CSRF, IDOR), les bonnes pratiques de sécurisation des applications web, le hachage des mots de passe (bcrypt), le chiffrement HTTPS/TLS et les pare-feux. Je pratique sur des plateformes CTF (Capture The Flag) pour renforcer mes compétences offensives et défensives.",
            tags: ["OWASP", "XSS", "SQL Injection", "CTF", "Chiffrement", "Pare-feu"]
        },
        winserver: {
            name: "Windows Server",
            icon: "fab fa-windows",
            category: "systeme",
            level: 65,
            color: "#0078d4",
            description: "Windows Server est une compétence clé pour l'administration système. Je maîtrise l'installation et la configuration de Windows Server 2019/2022, la gestion des rôles (Active Directory, DNS, DHCP, IIS), la création et administration d'utilisateurs/groupes, les stratégies de groupe (GPO) et la gestion des permissions NTFS. Ces compétences sont essentielles pour gérer des environnements d'entreprise Windows.",
            tags: ["Active Directory", "DNS", "DHCP", "GPO", "IIS", "NTFS"]
        },
        virtualisation: {
            name: "Virtualisation",
            icon: "fas fa-server",
            category: "systeme",
            level: 68,
            color: "#8e44ad",
            description: "L'administration des machines virtuelles est au cœur de l'infrastructure IT moderne. Je maîtrise VMware Workstation et VirtualBox pour créer, configurer et gérer des VMs. Je sais configurer les réseaux virtuels (NAT, Bridge, Host-only), gérer les snapshots, cloner des machines et optimiser les ressources. Cette compétence me permet de tester des environnements isolés et de simuler des architectures réseau complexes.",
            tags: ["VMware", "VirtualBox", "Snapshots", "Réseaux virtuels", "Hyperviseur"]
        },
        docker: {
            name: "Docker",
            icon: "fab fa-docker",
            category: "systeme",
            level: 42,
            color: "#0db7ed",
            description: "Docker révolutionne le déploiement d'applications. Je maîtrise les concepts fondamentaux : images, conteneurs, volumes et réseaux. Je sais écrire des Dockerfiles optimisés pour conteneuriser des applications web (PHP, Node.js), utiliser Docker Compose pour orchestrer des environnements multi-services (app + base de données + reverse proxy), et pousser des images sur Docker Hub. Docker garantit la reproductibilité des environnements du développement à la production.",
            tags: ["Dockerfile", "Docker Compose", "Images", "Conteneurs", "Docker Hub"]
        },
        maintenance: {
            name: "Maintenance",
            icon: "fas fa-tools",
            category: "systeme",
            level: 76,
            color: "#e67e22",
            description: "La maintenance informatique assure la pérennité des systèmes. Je maîtrise le diagnostic matériel (RAM, disque, processeur), le remplacement de composants, la mise à jour des drivers et des OS, la récupération de données et la résolution d'incidents logiciels. Je suis rigoureux dans la documentation des interventions et le suivi des parcs informatiques.",
            tags: ["Diagnostic", "Réparation", "OS", "Drivers", "Documentation"]
        },
        bureautique: {
            name: "Bureautique",
            icon: "fas fa-briefcase",
            category: "outils",
            level: 85,
            color: "#16a085",
            description: "La bureautique avancée est un atout professionnel majeur. Je maîtrise Microsoft Office 365 : Word (styles, sommaire automatique, publipostage), Excel (formules avancées, tableaux croisés dynamiques, graphiques, Power Query), PowerPoint (animations, transitions, maître des diapositives). Je suis également compétent sur Google Workspace (Docs, Sheets, Slides, Drive) pour la collaboration en temps réel.",
            tags: ["Word", "Excel avancé", "PowerPoint", "Google Workspace", "Power Query"]
        }
    };

    // ===================== SKILL COUNTERS =====================
    let skillCounters = JSON.parse(localStorage.getItem('skillCounters')) || {};
    for (const skillId in skills) {
        if (!skillCounters[skillId]) skillCounters[skillId] = 0;
    }

    // ===================== NAVBAR =====================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });

    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ===================== VIDEO RESIZE =====================
    function handleResize() {
        const video = document.getElementById('bgVideo');
        if (video) {
            video.style.width = window.innerWidth < 768 ? 'auto' : '100%';
            video.style.height = window.innerWidth < 768 ? '100%' : 'auto';
        }
    }
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    document.getElementById('bgVideo')?.addEventListener('loadeddata', handleResize);

    // ===================== SCROLL DOWN =====================
    document.querySelector('.scroll-down')?.addEventListener('click', () => {
        const target = document.getElementById('apropos');
        target?.scrollIntoView({ behavior: 'smooth' });
    });

    // ===================== STAT COUNTER ANIMATION =====================
    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.target);
            const duration = 1800;
            const step = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target + (el.dataset.suffix || '');
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
                }
            }, 16);
        });
    }

    // ===================== SKILLS RENDERING =====================
    let activeCategory = 'all';

    function renderSkillButtons() {
        const container = document.getElementById('skillButtons');
        container.innerHTML = '';

        Object.entries(skills).forEach(([id, skill]) => {
            if (activeCategory !== 'all' && skill.category !== activeCategory) return;

            const btn = document.createElement('button');
            btn.className = 'skill-btn';
            btn.dataset.skill = id;
            btn.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
                <div class="skill-level-bar"><div class="skill-level-fill" style="width:0%; background:${skill.color}"></div></div>
            `;
            container.appendChild(btn);

            requestAnimationFrame(() => {
                btn.querySelector('.skill-level-fill').style.width = skill.level + '%';
            });

            btn.addEventListener('click', function () {
                document.querySelectorAll('.skill-btn').forEach(b => b.classList.remove('active-skill'));
                this.classList.add('active-skill');
                showSkillDescription(id, skill);
                skillCounters[id]++;
                localStorage.setItem('skillCounters', JSON.stringify(skillCounters));
                updateSkillCounters();

                this.classList.add('clicked');
                setTimeout(() => this.classList.remove('clicked'), 400);
            });
        });
    }

    function showSkillDescription(id, skill) {
        const el = document.getElementById('skillDescription');
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';

        setTimeout(() => {
            el.innerHTML = `
                <div class="skill-desc-header">
                    <i class="${skill.icon}" style="color:${skill.color}"></i>
                    <h3 style="color:${skill.color}">${skill.name}</h3>
                    <div class="skill-desc-level">
                        <span>Maîtrise</span>
                        <div class="level-bar-outer">
                            <div class="level-bar-inner" style="width:${skill.level}%; background:${skill.color}"></div>
                        </div>
                        <span>${skill.level}%</span>
                    </div>
                </div>
                <p>${skill.description}</p>
                <div class="skill-tags">
                    ${skill.tags.map(t => `<span class="skill-tag" style="border-color:${skill.color};color:${skill.color}">${t}</span>`).join('')}
                </div>
            `;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200);
    }

    // ===================== CATEGORY FILTER =====================
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeCategory = this.dataset.cat;
            renderSkillButtons();
        });
    });

    // ===================== SKILL COUNTERS =====================
    function updateSkillCounters() {
        const container = document.getElementById('skillCounters');
        if (!container) return;
        container.innerHTML = '';

        const sorted = Object.entries(skills)
            .map(([id, s]) => ({ id, name: s.name, count: skillCounters[id] || 0, color: s.color }))
            .sort((a, b) => b.count - a.count);

        sorted.forEach(({ id, name, count, color }) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="counter-name">${name}</span>
                <div class="counter-bar-wrap">
                    <div class="counter-bar" style="width:${Math.min(count * 15, 100)}%; background:${color}"></div>
                </div>
                <span class="counter-num">${count} clic${count !== 1 ? 's' : ''}</span>
            `;
            container.appendChild(li);
        });
    }

    renderSkillButtons();
    updateSkillCounters();

    // ===================== SCROLL ANIMATIONS =====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('section-apropos')) {
                    setTimeout(animateCounters, 300);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .project-card, .contact-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ===================== ACTIVE NAV LINK =====================
    const sectionEls = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sectionEls.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 150) current = sec.getAttribute('id');
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    });

    // ===================== PROJECT CARDS TILT =====================
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(800px) rotateY(${x / 20}deg) rotateX(${-y / 20}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
