/**
 * MAGARPLAY GAMES STUDIO - CLIENT-SIDE SCRIPTS
 * Includes: Interactive Canvas Particles, Bilingual System (ES/EN), Mobile Nav
 */

// ==========================================================================
// BILINGUAL CONTENT DICTIONARY
// ==========================================================================
const translations = {
	es: {
		nav_games: "Juegos",
		nav_upcoming: "Próximamente",
		nav_about: "El Estudio",
		nav_contact: "Contacto",
		
		hero_badge: "Estudio Indie de Videojuegos",
		hero_title: "Creando Experiencias Arcade Inolvidables",
		hero_subtitle: "Desarrollamos videojuegos arcade modernos, pulidos y adictivos. Diseñados con pasión, física precisa y respeto total por la privacidad del jugador.",
		hero_btn_explore: "Explorar Juegos",
		hero_btn_demo: "🎮 Probar Demo Online",
		
		stat_no_ads: "Sin Anuncios Abusivos",
		stat_no_ads_sub: "100% Diversión y Enfoque",
		stat_fps: "Rendimiento 60 FPS",
		stat_fps_sub: "Motor Godot 4 Optimizado",
		stat_multiplatform: "Móvil y Web",
		stat_multiplatform_sub: "Juega Donde Quieras",
		
		sec_games_tag: "Catálogo Oficial",
		sec_games_title: "Nuestros Videojuegos",
		sec_games_desc: "Títulos listos para jugar, disfrutar y competir por las mejores marcas.",
		
		game_badge_featured: "Lanzamiento Destacado",
		game_badge_tech: "Godot 4",
		game_badge_offline: "100% Offline",
		game_tagline: "¡Desafío Arcade de Fútbol Flapper 2D!",
		game_desc: "Controla el balón con un solo toque y esquiva postes, silbatos y tarjetas rojas en el estadio más vibrante. Rompe récords, recoge balones de oro y vive el fútbol con una jugabilidad tan adictiva como desafiante.",
		
		feat_controls: "Controles One-Touch ultrasensibles",
		feat_referee: "Mecánicas de árbitro y tarjetas",
		feat_time: "Registro de tiempo y récords",
		feat_privacy: "Sin telemetría ni micropagos",
		
		btn_play_demo: "🎮 Jugar Demo Web Gratis",
		btn_game_details: "📱 Conocer Más y Descargar",
		
		sec_upcoming_tag: "El Futuro",
		sec_upcoming_title: "Próximos Proyectos",
		sec_upcoming_desc: "El catálogo de MagarPlay está en constante evolución con nuevos géneros y desafíos.",
		
		pipe1_badge: "En Producción • 2026",
		pipe1_title: "Proyecto Striker X",
		pipe1_desc: "Un arcade deportivo y táctico con estética retro-futurista de alta velocidad. Mecánicas de reflejos extremos para Android y PC.",
		pipe1_platforms: "Android • Steam • Web",
		
		pipe2_badge: "I+D Indie",
		pipe2_title: "MagarPlay Labs",
		pipe2_desc: "Espacio de experimentación y prototipado rápido donde probamos mecánicas innovadoras directamente en tu navegador web.",
		pipe2_platforms: "Web HTML5 • Móvil",
		
		sec_about_tag: "Nuestra Filosofía",
		sec_about_title: "El Alma de MagarPlay",
		sec_about_desc: "Creemos en los videojuegos que respetan el tiempo, la inteligencia y la privacidad de los jugadores.",
		
		pil1_title: "Jugabilidad Pura",
		pil1_desc: "Mecánicas fáciles de aprender pero difíciles de dominar. Controles precisos y respuesta inmediata al tacto.",
		
		pil2_title: "Sin Prácticas Depredadoras",
		pil2_desc: "Cero pay-to-win, sin banners invasivos ni anuncios forzados cada 30 segundos. Respetamos tu tiempo.",
		
		pil3_title: "Privacidad Total (Offline)",
		pil3_desc: "Tus datos personales y récords se quedan en tu dispositivo. Disfruta de tus juegos sin necesidad de conexión.",
		
		pil4_title: "Rendimiento Ligero",
		pil4_desc: "Juegos compactos, descargas ultra-rápidas y optimización perfecta para no sobrecalentar tu batería.",
		
		story_title: "De la Pasión Arcade a la Realidad",
		story_p1: "MagarPlay nació de la nostalgia por aquellos arcades dorados donde la habilidad individual lo era todo, combinada con la tecnología moderna de motores abiertos como Godot 4.",
		story_p2: "Cada juego que diseñamos busca rescatar la adrenalina genuina de superarse a uno mismo en cada partida. No hacemos aplicaciones complejas para retenerte artificialmente: hacemos videojuegos para divertirte.",
		
		contact_title: "¿Hablamos o Tienes Preguntas?",
		contact_desc: "Para sugerencias, soporte de nuestros juegos o colaboraciones de prensa, escríbenos directamente:",
		contact_btn: "✉ contacto@magarplay.com",
		
		footer_desc: "Estudio independiente de desarrollo de videojuegos. Pasión arcade, jugabilidad pura y respeto al jugador.",
		footer_games: "Juegos",
		footer_studio: "Estudio",
		footer_legal: "Legal",
		footer_privacy: "Política de Privacidad",
		footer_terms: "Términos de Servicio",
		footer_rights: "Todos los derechos reservados.",
		
		privacy_title: "Política de Privacidad",
		privacy_updated: "Última actualización: Septiembre 2026"
	},
	en: {
		nav_games: "Games",
		nav_upcoming: "Upcoming",
		nav_about: "The Studio",
		nav_contact: "Contact",
		
		hero_badge: "Indie Game Studio",
		hero_title: "Crafting Memorable Indie Arcade Experiences",
		hero_subtitle: "We build modern, polished, and addictive arcade video games. Designed with passion, precise physics, and complete respect for player privacy.",
		hero_btn_explore: "Explore Games",
		hero_btn_demo: "🎮 Play Online Demo",
		
		stat_no_ads: "Zero Intrusive Ads",
		stat_no_ads_sub: "100% Fun & Focus",
		stat_fps: "60 FPS Performance",
		stat_fps_sub: "Optimized Godot 4 Engine",
		stat_multiplatform: "Mobile & Web",
		stat_multiplatform_sub: "Play Anywhere",
		
		sec_games_tag: "Official Catalog",
		sec_games_title: "Our Video Games",
		sec_games_desc: "Titles ready to play, enjoy, and challenge for the highest scores.",
		
		game_badge_featured: "Featured Release",
		game_badge_tech: "Godot 4",
		game_badge_offline: "100% Offline",
		game_tagline: "2D Football Flapper Arcade Challenge!",
		game_desc: "Control the ball with a single tap and dodge goalposts, referee whistles, and red cards in the most vibrant stadium. Beat records, collect gold balls, and enjoy addictive, high-stakes football gameplay.",
		
		feat_controls: "Ultra-responsive One-Touch controls",
		feat_referee: "Dynamic referee & penalty cards",
		feat_time: "Match timer & record tracking",
		feat_privacy: "Zero telemetry or paywalls",
		
		btn_play_demo: "🎮 Play Free Web Demo",
		btn_game_details: "📱 Learn More & Download",
		
		sec_upcoming_tag: "The Future",
		sec_upcoming_title: "Upcoming Projects",
		sec_upcoming_desc: "The MagarPlay catalog is constantly expanding with fresh ideas and arcade challenges.",
		
		pipe1_badge: "In Production • 2026",
		pipe1_title: "Striker X Project",
		pipe1_desc: "A fast-paced retro-futuristic arcade sports title with tactical timing. High-reflex mechanics crafted for Android and PC.",
		pipe1_platforms: "Android • Steam • Web",
		
		pipe2_badge: "Indie R&D",
		pipe2_title: "MagarPlay Labs",
		pipe2_desc: "A creative sandbox for rapid prototyping where we experiment with novel mechanics playable right in your browser.",
		pipe2_platforms: "Web HTML5 • Mobile",
		
		sec_about_tag: "Our Philosophy",
		sec_about_title: "The Soul of MagarPlay",
		sec_about_desc: "We believe in games that respect player time, intelligence, and data privacy above all else.",
		
		pil1_title: "Pure Gameplay",
		pil1_desc: "Easy to pick up, rewarding to master. Immediate haptic feedback and tight, reliable physics.",
		
		pil2_title: "No Predatory Tactics",
		pil2_desc: "Zero pay-to-win, no invasive interstitial ads interrupting your flow every 30 seconds.",
		
		pil3_title: "Complete Privacy (Offline)",
		pil3_desc: "Your records, high scores, and playtime stay strictly on your local device. Fully playable offline.",
		
		pil4_title: "Lightweight Engine",
		pil4_desc: "Tiny installation size, instant load times, and battery-friendly thermal footprint.",
		
		story_title: "From Retro Arcade Passion to Modern Code",
		story_p1: "MagarPlay was born from a love for the golden age of arcade machines—where raw skill determined success—powered by open source Godot 4 technology.",
		story_p2: "Every game we publish aims to deliver genuine dopamine hits through self-improvement. We don't build psychological retention traps; we build pure fun.",
		
		contact_title: "Got Ideas or Questions?",
		contact_desc: "For player feedback, game support, or press inquiries, drop us a direct line:",
		contact_btn: "✉ contacto@magarplay.com",
		
		footer_desc: "Independent video game development studio. Arcade passion, pure gameplay, and player respect.",
		footer_games: "Games",
		footer_studio: "Studio",
		footer_legal: "Legal",
		footer_privacy: "Privacy Policy",
		footer_terms: "Terms of Service",
		footer_rights: "All rights reserved.",
		
		privacy_title: "Privacy Policy",
		privacy_updated: "Last updated: September 2026"
	}
};

// Current Language
let currentLang = 'es';

function setLanguage(lang) {
	if (!translations[lang]) return;
	currentLang = lang;
	localStorage.setItem('magarplay_lang', lang);
	
	// Update all elements with data-i18n
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n');
		if (translations[lang][key]) {
			el.textContent = translations[lang][key];
		}
	});

	// Toggle language-specific blocks (e.g. for rich text in privacy page)
	document.querySelectorAll('.lang-content-es').forEach(el => {
		el.style.display = lang === 'es' ? 'block' : 'none';
	});
	document.querySelectorAll('.lang-content-en').forEach(el => {
		el.style.display = lang === 'en' ? 'block' : 'none';
	});
	
	// Update Language Toggle Button Text
	const langBtn = document.getElementById('lang-toggle');
	if (langBtn) {
		const langLabel = langBtn.querySelector('.lang-label');
		if (langLabel) {
			langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
		}
	}
	
	document.documentElement.lang = lang;
}

function initLanguage() {
	const savedLang = localStorage.getItem('magarplay_lang') || 
		(navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');
	setLanguage(savedLang);
	
	const langBtn = document.getElementById('lang-toggle');
	if (langBtn) {
		langBtn.addEventListener('click', () => {
			const nextLang = currentLang === 'es' ? 'en' : 'es';
			setLanguage(nextLang);
		});
	}
}

// ==========================================================================
// INTERACTIVE PARTICLES CANVAS (Soccer / Cyber Field Atmosphere)
// ==========================================================================
function initParticles() {
	const canvas = document.getElementById('particles-canvas');
	if (!canvas) return;
	
	const ctx = canvas.getContext('2d');
	let width = canvas.width = window.innerWidth;
	let height = canvas.height = window.innerHeight;
	
	const particles = [];
	const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
	
	class Particle {
		constructor() {
			this.reset();
		}
		
		reset() {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
			this.size = Math.random() * 2 + 1;
			this.speedX = (Math.random() - 0.5) * 0.45;
			this.speedY = (Math.random() - 0.5) * 0.45;
			// Vibrant football pitch / cyber tones: cyan (#00f0ff), lime (#00ff88), gold (#ffd700)
			const colors = [
				'rgba(0, 240, 255, 0.45)',
				'rgba(0, 255, 136, 0.35)',
				'rgba(255, 215, 0, 0.3)'
			];
			this.color = colors[Math.floor(Math.random() * colors.length)];
		}
		
		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			
			if (this.x < 0) this.x = width;
			if (this.x > width) this.x = 0;
			if (this.y < 0) this.y = height;
			if (this.y > height) this.y = 0;
		}
		
		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = this.color;
			ctx.fill();
		}
	}
	
	for (let i = 0; i < particleCount; i++) {
		particles.push(new Particle());
	}
	
	function render() {
		ctx.clearRect(0, 0, width, height);
		
		// Connect nearby particles with subtle neon lines
		for (let i = 0; i < particles.length; i++) {
			for (let j = i + 1; j < particles.length; j++) {
				const dx = particles[i].x - particles[j].x;
				const dy = particles[i].y - particles[j].y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				
				if (dist < 110) {
					ctx.beginPath();
					ctx.moveTo(particles[i].x, particles[i].y);
					ctx.lineTo(particles[j].x, particles[j].y);
					ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 110) * 0.12})`;
					ctx.lineWidth = 0.8;
					ctx.stroke();
				}
			}
			particles[i].update();
			particles[i].draw();
		}
		
		requestAnimationFrame(render);
	}
	
	render();
	
	window.addEventListener('resize', () => {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
	});
}

// ==========================================================================
// MOBILE MENU NAVIGATION
// ==========================================================================
function initMobileMenu() {
	const menuBtn = document.getElementById('mobile-menu-btn');
	const navLinks = document.getElementById('nav-links');
	
	if (menuBtn && navLinks) {
		menuBtn.addEventListener('click', () => {
			navLinks.classList.toggle('open');
		});
		
		navLinks.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				navLinks.classList.remove('open');
			});
		});
	}
}

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
	initLanguage();
	initParticles();
	initMobileMenu();
});
