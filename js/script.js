// ================= MENÚ HAMBURGUESA =================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}


// ================= BOTÓN "VOLVER ARRIBA" =================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================= TRÁILER OFICIAL =================
const openTrailerBtn = document.getElementById('openTrailerBtn');
const closeTrailerBtn = document.getElementById('closeTrailerBtn');
const videoModal = document.getElementById('videoModal');
const iframeContainer = document.getElementById('iframeContainer');

// Tráiler oficial de The Batman (2022)
const trailerUrl = "https://www.youtube.com/watch?v=fWQrd6cwJ0A";

if (openTrailerBtn && videoModal) {
    openTrailerBtn.addEventListener('click', () => {
        iframeContainer.innerHTML = `<iframe src="${trailerUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        videoModal.classList.add('active');
        videoModal.setAttribute('aria-hidden', 'false');
    });

    const closeVideoModal = () => {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        setTimeout(() => { iframeContainer.innerHTML = ''; }, 300);
    };

    closeTrailerBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideoModal();
    });
}

// ================= GALERÍA LIGHTBOX =================
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeLightboxBtn = document.getElementById('closeLightboxBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (lightbox && galleryItems.length > 0) {
    let currentIndex = 0;

    const openLightbox = (index) => {
        currentIndex = index;
        const img = galleryItems[index].querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCaption) lightboxCaption.textContent = img.alt;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const navigate = (dir) => {
        currentIndex = (currentIndex + dir + galleryItems.length) % galleryItems.length;
        const img = galleryItems[currentIndex].querySelector('img');
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            if (lightboxCaption) lightboxCaption.textContent = img.alt;
            lightboxImg.style.opacity = '1';
        }, 200);
    };

    galleryItems.forEach((item, i) => {
        item.addEventListener('click', () => openLightbox(i));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') openLightbox(i);
        });
    });

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });
}

// ================= COUNTER ANIMADO (PREMIOS) =================
const counterEl = document.getElementById('globalAwardsCounter');

if (counterEl) {
    const target = parseInt(counterEl.getAttribute('data-target'));
    let current = 0;
    const increment = Math.ceil(target / 80);

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const interval = setInterval(() => {
                current = Math.min(current + increment, target);
                counterEl.textContent = current;
                if (current >= target) clearInterval(interval);
            }, 20);
            observer.unobserve(counterEl);
        }
    }, { threshold: 0.5 });

    observer.observe(counterEl);
}

// ================= OBSERVADOR DE SCROLL (animate-fade-up) =================
const animatedEls = document.querySelectorAll('.animate-fade-up');

if ('IntersectionObserver' in window && animatedEls.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedEls.forEach(el => {
        el.style.animationPlayState = 'paused';
        scrollObserver.observe(el);
    });
}

// ================= RIDDLER: REVELAR RESPUESTAS =================
const riddleAnswers = document.querySelectorAll('.riddle-a');

riddleAnswers.forEach(ans => {
    ans.addEventListener('click', () => {
        ans.classList.toggle('revealed');
        const hint = ans.nextElementSibling;
        if (hint && hint.classList.contains('riddle-reveal-hint')) {
            hint.style.display = ans.classList.contains('revealed') ? 'none' : 'block';
        }
    });
});

// ================= FORMULARIO DE CONTACTO (Gordon / Bat-Señal) =================
const gordonForm = document.getElementById('gordonForm');
const signalSent = document.getElementById('signalSent');

if (gordonForm) {

    // ── Helpers de validación ──────────────────────────────────
    const showError = (input, msgEl, msg) => {
        input.classList.add('field-error');
        input.classList.remove('field-ok');
        msgEl.textContent = '— ' + msg;
        msgEl.classList.add('show');
    };

    const clearError = (input, msgEl) => {
        input.classList.remove('field-error');
        msgEl.classList.remove('show');
    };

    const markOk = (input, msgEl) => {
        clearError(input, msgEl);
        input.classList.add('field-ok');
    };

    const isValidEmail = (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());

    // ── Campos ────────────────────────────────────────────────
    const nameInput    = document.getElementById('name');
    const emailInput   = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError    = document.getElementById('nameError');
    const emailError   = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const charCounter  = document.getElementById('charCounter');
    const MAX_CHARS    = 500;

    // ── Contador de caracteres ─────────────────────────────────
    if (messageInput && charCounter) {
        messageInput.addEventListener('input', () => {
            const len = messageInput.value.length;
            charCounter.textContent = len + ' / ' + MAX_CHARS;
            charCounter.classList.remove('near-limit', 'at-limit');
            if (len >= MAX_CHARS)          charCounter.classList.add('at-limit');
            else if (len >= MAX_CHARS * 0.8) charCounter.classList.add('near-limit');
        });
    }

    // ── Validación en tiempo real (al salir del campo) ─────────
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            if (!nameInput.value.trim()) {
                showError(nameInput, nameError, 'Ingresá tu nombre');
            } else if (nameInput.value.trim().length < 2) {
                showError(nameInput, nameError, 'Nombre demasiado corto');
            } else {
                markOk(nameInput, nameError);
            }
        });
        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('field-error')) {
                if (nameInput.value.trim().length >= 2) markOk(nameInput, nameError);
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (!emailInput.value.trim()) {
                showError(emailInput, emailError, 'Ingresá tu email');
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, emailError, 'Formato inválido (ej: gordon@gcpd.gov)');
            } else {
                markOk(emailInput, emailError);
            }
        });
        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('field-error')) {
                if (isValidEmail(emailInput.value)) markOk(emailInput, emailError);
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            if (!messageInput.value.trim()) {
                showError(messageInput, messageError, 'Escribí tu mensaje');
            } else if (messageInput.value.trim().length < 10) {
                showError(messageInput, messageError, 'Mensaje demasiado corto');
            } else {
                markOk(messageInput, messageError);
            }
        });
        messageInput.addEventListener('input', () => {
            if (messageInput.classList.contains('field-error')) {
                if (messageInput.value.trim().length >= 10) markOk(messageInput, messageError);
            }
        });
    }

    // ── Submit ─────────────────────────────────────────────────
    gordonForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        // Validar nombre
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            showError(nameInput, nameError, nameInput.value.trim() ? 'Nombre demasiado corto' : 'Ingresá tu nombre');
            valid = false;
        } else {
            markOk(nameInput, nameError);
        }

        // Validar email
        if (!emailInput.value.trim()) {
            showError(emailInput, emailError, 'Ingresá tu email');
            valid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, emailError, 'Formato inválido (ej: gordon@gcpd.gov)');
            valid = false;
        } else {
            markOk(emailInput, emailError);
        }

        // Validar mensaje
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            showError(messageInput, messageError, messageInput.value.trim() ? 'Mensaje demasiado corto' : 'Escribí tu mensaje');
            valid = false;
        } else {
            markOk(messageInput, messageError);
        }

        // Si todo OK — mostrar confirmación
        if (valid) {
            gordonForm.style.display = 'none';
            if (signalSent) signalSent.classList.add('show');
        } else {
            // Scroll al primer error
            const firstError = gordonForm.querySelector('.field-error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// ── CONO DE LUZ (beamCanvas) — baja desde el símbolo hacia el suelo ─────────
const beamCanvas = document.getElementById('beamCanvas');
if (beamCanvas) {
    const bCtx = beamCanvas.getContext('2d');

    const resizeBeam = () => {
        beamCanvas.width  = beamCanvas.offsetWidth;
        beamCanvas.height = beamCanvas.offsetHeight;
    };
    resizeBeam();
    window.addEventListener('resize', resizeBeam);

    let phase = 0;

    // Partículas de polvo dentro del haz
    const makeDust = () => Array.from({ length: 35 }, () => ({
        x:  beamCanvas.width  / 2 + (Math.random() - 0.5) * 60,
        y:  beamCanvas.height * (0.22 + Math.random() * 0.65),
        r:  0.5 + Math.random() * 1.3,
        vy: -(0.2 + Math.random() * 0.5),
        vx: (Math.random() - 0.5) * 0.3,
        t:  Math.random() * Math.PI * 2
    }));
    let dust = makeDust();
    window.addEventListener('resize', () => { dust = makeDust(); });

    const drawBeam = () => {
        const W = beamCanvas.width;
        const H = beamCanvas.height;
        bCtx.clearRect(0, 0, W, H);

        const pulse  = 0.82 + Math.sin(phase) * 0.18;

        // Origen del cono: centro del círculo/símbolo (~22% desde arriba)
        const originX = W / 2;
        const originY = H * 0.22;

        // Base del cono: proyector al fondo (~92% desde arriba)
        const baseY     = H * 0.92;
        const coneDepth = baseY - originY;

        // Apertura del haz en la base
        const halfBase  = coneDepth * 0.28;

        // ── Haz exterior difuso ──
        const gradOut = bCtx.createLinearGradient(originX, originY, originX, baseY);
        gradOut.addColorStop(0,    `rgba(180,215,255,${0.0  * pulse})`);
        gradOut.addColorStop(0.05, `rgba(160,205,255,${0.18 * pulse})`);
        gradOut.addColorStop(0.4,  `rgba(100,170,255,${0.11 * pulse})`);
        gradOut.addColorStop(1,    `rgba(60, 130,220,${0.04 * pulse})`);

        bCtx.beginPath();
        bCtx.moveTo(originX, originY);
        bCtx.lineTo(originX - halfBase * 1.6, baseY);
        bCtx.lineTo(originX + halfBase * 1.6, baseY);
        bCtx.closePath();
        bCtx.fillStyle = gradOut;
        bCtx.fill();

        // ── Núcleo brillante ──
        const gradCore = bCtx.createLinearGradient(originX, originY, originX, baseY);
        gradCore.addColorStop(0,    `rgba(220,235,255,${0.0  * pulse})`);
        gradCore.addColorStop(0.04, `rgba(200,225,255,${0.35 * pulse})`);
        gradCore.addColorStop(0.3,  `rgba(140,195,255,${0.18 * pulse})`);
        gradCore.addColorStop(1,    `rgba(74, 158,255,${0.06 * pulse})`);

        bCtx.beginPath();
        bCtx.moveTo(originX, originY);
        bCtx.lineTo(originX - halfBase * 0.55, baseY);
        bCtx.lineTo(originX + halfBase * 0.55, baseY);
        bCtx.closePath();
        bCtx.fillStyle = gradCore;
        bCtx.fill();

        // ── Partículas de polvo ──
        bCtx.save();
        bCtx.beginPath();
        bCtx.moveTo(originX, originY);
        bCtx.lineTo(originX - halfBase * 1.6, baseY);
        bCtx.lineTo(originX + halfBase * 1.6, baseY);
        bCtx.closePath();
        bCtx.clip();

        dust.forEach(d => {
            const alpha = 0.10 + Math.abs(Math.sin(d.t)) * 0.12;
            bCtx.beginPath();
            bCtx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            bCtx.fillStyle = `rgba(190,220,255,${alpha * pulse})`;
            bCtx.fill();
            d.y += d.vy;
            d.x += d.vx + Math.sin(d.t * 0.4) * 0.25;
            d.t += 0.025;
            if (d.y < originY) {
                d.y = baseY - 10;
                d.x = originX + (Math.random() - 0.5) * halfBase * 1.4;
            }
        });
        bCtx.restore();

        // ── Reflejo en el suelo ──
        const gradFloor = bCtx.createRadialGradient(originX, baseY, 0, originX, baseY, halfBase * 0.9);
        gradFloor.addColorStop(0,   `rgba(74,158,255,${0.18 * pulse})`);
        gradFloor.addColorStop(0.5, `rgba(74,158,255,${0.06 * pulse})`);
        gradFloor.addColorStop(1,   'rgba(74,158,255,0)');
        bCtx.beginPath();
        bCtx.ellipse(originX, baseY, halfBase * 0.9, 12, 0, 0, Math.PI * 2);
        bCtx.fillStyle = gradFloor;
        bCtx.fill();

        phase += 0.016;
        requestAnimationFrame(drawBeam);
    };
    drawBeam();
}

// ── LLUVIA EN LA ESCENA DE LA SEÑAL (signalRain) ─────────────────────────────
const signalRainCanvas = document.getElementById('signalRain');
if (signalRainCanvas) {
    const rCtx = signalRainCanvas.getContext('2d');

    const resizeRain = () => {
        signalRainCanvas.width  = signalRainCanvas.offsetWidth;
        signalRainCanvas.height = signalRainCanvas.offsetHeight;
    };
    resizeRain();
    window.addEventListener('resize', resizeRain);

    const drops = Array.from({ length: 130 }, () => ({
        x:   Math.random() * (signalRainCanvas.offsetWidth  || 600),
        y:   Math.random() * (signalRainCanvas.offsetHeight || 900),
        len: 10 + Math.random() * 20,
        spd: 5  + Math.random() * 7,
        op:  0.025 + Math.random() * 0.07,
        tilt: -0.15 + Math.random() * 0.06
    }));

    const drawSignalRain = () => {
        const W = signalRainCanvas.width;
        const H = signalRainCanvas.height;
        rCtx.clearRect(0, 0, W, H);
        drops.forEach(d => {
            rCtx.beginPath();
            rCtx.moveTo(d.x, d.y);
            rCtx.lineTo(d.x + d.tilt * d.len, d.y + d.len);
            rCtx.strokeStyle = `rgba(110,170,255,${d.op})`;
            rCtx.lineWidth = 0.6;
            rCtx.stroke();
            d.y += d.spd;
            d.x += d.tilt * 2;
            if (d.y > H) { d.y = -d.len; d.x = Math.random() * W; }
        });
        requestAnimationFrame(drawSignalRain);
    };
    drawSignalRain();
}

// ================= PARTÍCULAS BAT (páginas de premios) =================
const particlesContainer = document.getElementById('particles-container');

if (particlesContainer) {
    const bats = ['🦇', '·', '·', '·'];
    for (let i = 0; i < 15; i++) {
        const bat = document.createElement('div');
        bat.classList.add('bat-particle');
        bat.textContent = bats[Math.floor(Math.random() * bats.length)];
        bat.style.left = `${Math.random() * 100}%`;
        bat.style.animationDuration = `${8 + Math.random() * 12}s`;
        bat.style.animationDelay = `${Math.random() * 10}s`;
        bat.style.fontSize = `${0.5 + Math.random() * 1}rem`;
        particlesContainer.appendChild(bat);
    }
}

// ================= EFECTO LLUVIA (canvas sutil) =================
const rainCanvas = document.getElementById('rainCanvas');
if (rainCanvas) {
    const ctx = rainCanvas.getContext('2d');
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        rainCanvas.width = window.innerWidth;
        rainCanvas.height = window.innerHeight;
    });

    const drops = Array.from({ length: 80 }, () => ({
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height,
        speed: 2 + Math.random() * 4,
        length: 10 + Math.random() * 20,
        opacity: 0.03 + Math.random() * 0.06
    }));

    const drawRain = () => {
        ctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
        drops.forEach(d => {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d.x - 1, d.y + d.length);
            ctx.strokeStyle = `rgba(74, 140, 255, ${d.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            d.y += d.speed;
            if (d.y > rainCanvas.height) {
                d.y = -d.length;
                d.x = Math.random() * rainCanvas.width;
            }
        });
        requestAnimationFrame(drawRain);
    };

    drawRain();
}

// ================= DROPDOWN — LA PELÍCULA =================
const dropdowns = document.querySelectorAll('.nav-dropdown');

dropdowns.forEach(dd => {
    const parentLink = dd.querySelector(':scope > a');
    const subLinks   = dd.querySelectorAll('.dropdown-menu a');

    // Click en el link padre (La Película) — solo mobile
    parentLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const isOpen = dd.classList.contains('open');
            dropdowns.forEach(other => other.classList.remove('open'));
            if (!isOpen) dd.classList.add('open');
        }
    });

    // Click en una opción del submenú — cerrar el nav y navegar
    subLinks.forEach(subLink => {
        subLink.addEventListener('click', () => {
            // Cerrar el menú hamburguesa
            if (navLinks)  navLinks.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            // Cerrar dropdown
            dropdowns.forEach(other => other.classList.remove('open'));
        });
    });
});

// Cerrar dropdown al hacer click fuera — solo desktop
document.addEventListener('click', (e) => {
    if (window.innerWidth > 768 && !e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(dd => dd.classList.remove('open'));
    }
});
