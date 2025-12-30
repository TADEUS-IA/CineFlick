'use strict';

/**
 * ===================================================================
 * CONFIGURAÇÃO CENTRAL
 * ===================================================================
 * Altere todos os IDs, URLs e dados da página aqui.
 */
const CONFIG = {
    // IDs de Tracking
    metaPixelId: '1148594784078039',
    gtmId: 'GTM-SEU_ID_AQUI',

    // Endpoints de Integração
    n8n: {
        enabled: true, // Mude para false para desabilitar o n8n
        url: 'https://seu-dominio-n8n.com/webhook/chave-secreta'
    },
    googleSheets: {
        enabled: true, // Mude para false para desabilitar o G. Sheets
        // IMPORTANTE: Este deve ser o URL de deploy do seu Google Apps Script
        appsScriptUrl: 'https://script.google.com/macros/s/SEU_ID_APPS_SCRIPT/exec',
        sheetId: 'ID_DA_SUA_PLANILHA_GOOGLE',
        sheetName: 'Logs' // Nome da aba onde os dados serão gravados
    },

    // Links de CTA e Vídeos
    checkoutUrl: 'https://pay.kirvano.com/64d2f1df-3435-4e01-bbdf-8b591841e0dd?aff=e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe',
    supportUrl: 'https://wa.me/11942439819', 
    
    // [ATUALIZADO] Links dos Planos atualizados conforme o novo HTML
    plans: {
        mensal: 'https://pay.kirvano.com/64d2f1df-3435-4e01-bbdf-8b591841e0dd?aff=e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe', // R$ 19,90
        trimestral: 'https://pay.kirvano.com/63204ff4-d01c-4afc-b9ed-7d085eb045f0?aff=e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe', // R$ 39,90
        semestral: 'https://pay.kirvano.com/2fa263d7-8ab5-47ca-bed8-785dbda2d330?aff=e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe', // R$ 69,90
        anual: 'https://pay.kirvano.com/5630b4f0-09c8-476b-8739-4bef06cad2de?aff=e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe' // R$ 129,90
    },
    
    video: {
        // ID do vídeo do YouTube para o Hero
        heroVideoId: 'qEVUtrk8_B4', // Ex: ID do trailer de "Duna 2"
        
        // URL do vídeo demo (pode ser YouTube ou local)
        appDemoUrl: 'https://www.youtube.com/embed/6Q_fB6x5CJE?si=C2rn_V2IaY2N-qE3' // Ex: 'videos/app-demo.mp4'
    },

    // DADOS DOS CARDS COM CARROSSEL INTERNO
    featureCards: [
        {
            id: 'filmes',
            title: 'Filmes Incríveis',
            description: 'Assista a clássicos, lançamentos e grandes produções vencedoras de prêmios, tudo em alta definição e com uma seleção que agrada a todos os gostos.',
            images: [
                'https://m.media-amazon.com/images/M/MV5BNzk5MTE4YTUtNGU2My00MTYxLWE5NGItODk4YWFkOWYyMjA5XkEyXkFqcGc@._V1_.jpg', // Duna 2
                'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3580195:1730981795/Interestelar.jpg?f=16x9&h=574&w=1020&$p$f$h$w=ec37398', // Interstellar
                'https://movienonsense.com/wp-content/uploads/2023/12/oppenheimer.jpg'  // Oppenheimer
            ]
        },
        {
            id: 'series',
            title: 'Séries Imperdíveis',
            description: 'Descubra séries aclamadas e sucessos do momento, com temporadas completas disponíveis para você maratonar.',
            images: [
                'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/WEDNESDAY-JENNA-ORTEGA_GALLERY-SINGLE_0287R2C-e1700688379502.jpg?w=1200&h=1200&crop=1', // wandinha
                'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/the-boys.jpeg?w=1200&h=1200&crop=1', // the boys
                'https://jpimg.com.br/uploads/2024/09/image_6487327-3-2.jpg'  // The Last of Us
            ]
        },
        {
            id: 'animes',
            title: 'Animes Crunchyroll!',
            description: 'Possuímos uma lista enorme com todos os animes do momento atualizados e em qualidade HD para você maratonar.',
            images: [
                'https://i.redd.it/sypoeebfdvox.jpg', // One Piece
                'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', // Jujutsu Kaisen
                'https://upload.wikimedia.org/wikipedia/pt/d/d2/Naruto_vol._01.jpg'  // Attack on Titan
            ]
        },
        {
            id: 'canais',
            title: 'Canais Adulto',
            description: 'Toda a lista de canais adultos protegido com senha para bloqueio e segurança das crianças.',
            images: [
                'https://ofertasclaro.cdn.prismic.io/ofertasclaro/aC4F-SdWJ-7kSaFz_PlayboyTV.svg',
                'https://www.claro.com.br/files/104379/860x1440/100edfadc4/assinar-canais-adultos-porno-sextreme.png/m/filters:quality(75)',
                'https://www.thedailytelevision.com/sites/default/files/notas/imagenes/interior/venus_esperanza_grande.jpg'
            ]
        },
        {
            id: 'kids',
            title: 'Conteúdo Infantil',
            description: 'Toda a lista para a criançada se divertir além de disney plus e muito mais!',
            images: [
                'https://www.imagenspng.com.br/wp-content/uploads/2018/10/patrulha-canina-05.png',
                'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/79/96/51/19694367.jpg'
            ]
        },
        {
            id: 'qualidade',
            title: 'Esporte AO VIVO!',
            description: 'Prepare-se para ter literalmente todos os acessos dos canais de esporte, futebol, artes marciais e muito mais!',
            images: [
                'https://cdn.prod.website-files.com/5cf5a026c170934c311c121c/66e9ec7d2c7b7688aa3e9835_FP_BR_OGt.jpg',
                'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2018/03/og-default.jpg',
                'https://racingonline.com.br/wp-content/uploads/2025/11/Largada-GP-Sao-Paulo-de-F1-2024.jpg',
            ]
        }
    ],

    // DADOS DOS DEPOIMENTOS (PRINTS DO WHATSAPP)
    testimonials: [
        {
            id: 't1',
            imageUrl: '1.jpg'
        },
        {
            id: 't2',
            imageUrl: '2.jpg'
        },
        {
            id: 't3',
            imageUrl: '3.jpg'
        },
        {
            id: 't4',
            imageUrl: '4.jpg'
        },
        {
            id: 't5',
            imageUrl: '5.jpg'
        },
        {
            id: 't6',
            imageUrl: '6.jpg'
        },
        {
            id: 't7',
            imageUrl: '1.jpg'
        },
        {
            id: 't8',
            imageUrl: '2.jpg'
        },
        {
            id: 't9',
            imageUrl: '3.jpg'
        },
        {
            id: 't10',
            imageUrl: '4.jpg'
        },
    ]
};

/**
 * ===================================================================
 * MÓDULO DE INICIALIZAÇÃO
 * ===================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    initAnalytics();
    initStickyNav(); // Controla a NAV flutuante
    initHeroVideo();
    initAppVideo();
    populateFeatureCards(); // Popula os 6 cards (layout atualizado)
    populateTestimonials(); // Popula os slides de depoimentos
    initTestimonialCarousel(); // Ativa o carrossel de depoimentos
    initFAQAccordion(); // Ativa o FAQ
    initEventListeners();
    initScrollAnimations();
    
    // [NOVO] Inicia o ciclo de notificações de prova social
    initSocialProof();
});

/**
 * Injeta dinamicamente os scripts de Meta Pixel e GTM no <head>.
 */
function initAnalytics() {
    // Injeção do Google Tag Manager
    if (CONFIG.gtmId) {
        const gtmScript = document.createElement('script');
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${CONFIG.gtmId}`;
        document.head.appendChild(gtmScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', CONFIG.gtmId);
        console.log('GTM Inicializado.');
    }

    // Injeção do Meta Pixel
    if (CONFIG.metaPixelId) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', CONFIG.metaPixelId);
        
        /* * [CORREÇÃO APLICADA] 
         * Usamos nossa função central 'trackEvent' para que o
         * PageView também seja enviado para a CAPI (Servidor).
         */
        trackEvent('PageView', { event: 'page_view' });

        console.log('Meta Pixel Inicializado.');
    }
}

/**
 * ===================================================================
 * MÓDULO DA NAVEGAÇÃO STICKY
 * ===================================================================
 */
function initStickyNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const stickyThreshold = 10; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyThreshold) {
            nav.classList.add('is-sticky');
        } else {
            nav.classList.remove('is-sticky');
        }
    });
}


/**
 * Configura o Iframe do vídeo de fundo do Hero.
 */
function initHeroVideo() {
    const iframe = document.getElementById('hero-video-iframe');
    if (iframe && CONFIG.video.heroVideoId) {
        const params = [
            'autoplay=1',
            'mute=1',
            'loop=1',
            `playlist=${CONFIG.video.heroVideoId}`,
            'controls=0',
            'showinfo=0',
            'rel=0',
            'iv_load_policy=3',
            'modestbranding=1'
        ].join('&');
        
        iframe.src = `https://www.youtube.com/embed/${CONFIG.video.heroVideoId}?${params}`;
    }
}

/**
 * Configura o Iframe do vídeo de demonstração do app.
 */
function initAppVideo() {
    const iframe = document.getElementById('app-demo-video');
    if (iframe && CONFIG.video.appDemoUrl) {
        iframe.src = CONFIG.video.appDemoUrl;
    }
}

/**
 * ===================================================================
 * POPULA OS CARDS DE FEATURES (Layout Atualizado)
 * ===================================================================
 */
function populateFeatureCards() {
    const grid = document.getElementById('feature-card-grid');
    if (!grid || !CONFIG.featureCards) return;

    let featuresHTML = '';
    CONFIG.featureCards.forEach(card => {
        const imageUrl = card.images[0] || 'https://via.placeholder.com/400x225/2a2a4a/ffffff?text=CineFlick'; // Placeholder

        featuresHTML += `
            <article class="feature-card animate-on-scroll" data-card-id="${card.id}">
                <div class="card-image-carousel"> 
                    <img src="${imageUrl}" alt="${card.title}" class="active">
                </div>
                <div class="card-content">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            </article>
        `;
    });

    grid.innerHTML = featuresHTML;
}

/**
 * ===================================================================
 * POPULA O CARROSSEL DE DEPOIMENTOS
 * ===================================================================
 */
function populateTestimonials() {
    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.getElementById('carousel-dots-nav');
    if (!slider || !dotsContainer || !CONFIG.testimonials) return;

    let sliderHTML = '';
    let dotsHTML = '';

    CONFIG.testimonials.forEach((testimonial, index) => {
        const isActive = index === 0 ? 'active' : '';

        // Slide (Card com a imagem)
        sliderHTML += `
            <div class="testimonial-slide">
                <div class="testimonial-card">
                    <img src="${testimonial.imageUrl}" alt="Depoimento ${testimonial.id}">
                </div>
            </div>
        `;
        
        // Dot
        dotsHTML += `<button class="dot-nav ${isActive}" data-index="${index}"></button>`;
    });

    slider.innerHTML = sliderHTML;
    dotsContainer.innerHTML = dotsHTML;
}

/**
 * ===================================================================
 * INICIA O CARROSSEL DE DEPOIMENTOS
 * ===================================================================
 */
function initTestimonialCarousel() {
    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.getElementById('carousel-dots-nav');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (!slider || !dotsContainer || !prevBtn || !nextBtn) return;

    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dots-nav .dot-nav');
    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    const autoplayInterval = 4000; // 4 segundos
    let autoplayTimer;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function startAutoplay() {
        clearInterval(autoplayTimer); 
        autoplayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, autoplayInterval);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        stopAutoplay(); 
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        stopAutoplay(); 
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot-nav')) {
            const index = parseInt(e.target.dataset.index, 10);
            goToSlide(index);
            stopAutoplay(); 
        }
    });
    
    slider.closest('.testimonial-carousel').addEventListener('mouseenter', stopAutoplay);
    slider.closest('.testimonial-carousel').addEventListener('mouseleave', startAutoplay);

    goToSlide(0); 
    startAutoplay(); 
}


/**
 * ===================================================================
 * INICIA O ACORDION (FAQ)
 * ===================================================================
 */
function initFAQAccordion() {
    const allFaqItems = document.querySelectorAll('.faq-item');
    if (!allFaqItems.length) return;

    allFaqItems.forEach(item => {
        item.addEventListener('toggle', (event) => {
            if (item.open) {
                allFaqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
}


/* =================================================================== */
/* LÓGICA DO POP-UP DE DESCONTO (MODAL)                           */
/* =================================================================== */

/**
 * Exibe o modal de parabéns e configura seu link de destino.
 * @param {string} checkoutUrl - A URL de destino para o botão de confirmação.
 */
function showCongratsModal(checkoutUrl) {
    const modal = document.getElementById('congrats-modal');
    const modalButton = document.getElementById('modal-confirm-button');
        
    if (!modal || !modalButton) {
        console.error('Modal de parabéns não encontrado. Redirecionando diretamente.');
        // Fallback: Se o modal falhar, apenas redireciona
        window.open(checkoutUrl, '_blank'); 
        return;
    }

    // Configura o botão do modal com o link correto
    modalButton.href = checkoutUrl;

    // Exibe o modal
    modal.classList.add('visible');

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('visible');
        modal.removeEventListener('mousedown', overlayClickHandler);
    };

    // Handler para fechar clicando no fundo (overlay)
    const overlayClickHandler = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    // Adiciona listener para fechar clicando no fundo
    modal.addEventListener('mousedown', overlayClickHandler);
    
    // Adiciona listener ao botão de confirmação para fechar o modal
    // (O redirecionamento acontece naturalmente pelo href)
    modalButton.addEventListener('click', closeModal);
}


/**
 * Adiciona o pop-up de desconto e o tracking em um botão de plano.
 * @param {HTMLElement} buttonElement - O elemento <a> do botão (ex: #cta-mensal).
 * @param {string} planName - O nome do plano para tracking (ex: 'Mensal').
 * @param {string} checkoutUrl - A URL de destino do checkout.
 */
function setupPlanButtonListener(buttonElement, planName, checkoutUrl) {
    if (!buttonElement) {
        console.warn(`Elemento do botão para o plano ${planName} não encontrado.`);
        return;
    }

    buttonElement.href = checkoutUrl;
    
    buttonElement.addEventListener('click', (event) => {
        // 1. Impede a navegação imediata
        event.preventDefault(); 

        // 2. Rastreia o evento (como já fazia)
        trackEvent('Select_Plan', { event: 'select_plan', plan_name: planName });
        
        // 3. Mostra o modal personalizado (substitui o alert())
        showCongratsModal(checkoutUrl);
    });
}


/**
 * ===================================================================
 * MÓDULO DE EVENTOS E INTERAÇÕES
 * ===================================================================
 */
function initEventListeners() {
    
    // 2. CTA da Navegação
    const navCTA = document.getElementById('nav-cta');
    if (navCTA) {
        navCTA.addEventListener('click', (e) => {
            console.log('Evento: Clique no CTA da Nav');
            trackEvent('Nav_CTA_Click', {
                event: 'nav_cta_click',
                destination_url: navCTA.href 
            });
        });
    }

    // 3. CTA Principal do Hero
    const heroCtaMain = document.getElementById('hero-cta-main');
    if (heroCtaMain) {
        heroCtaMain.addEventListener('click', (e) => {
            console.log('Evento: Clique no CTA do Hero (Principal)');
            trackEvent('Hero_CTA_Click', {
                event: 'hero_cta_click',
                destination_url: heroCtaMain.href 
            });
        });
    }
    
    // 4. CTA do Plano Mensal (Seção "Como Funciona")
    const ctaPlanoMensal = document.getElementById('cta-plano-mensal');
    if (ctaPlanoMensal) {
        ctaPlanoMensal.href = CONFIG.plans.mensal;
        ctaPlanoMensal.addEventListener('click', () => trackEvent('Select_Plan_Mensal', { event: 'select_plan', plan_name: 'Plano Mensal (Card Como Funciona)' }));
    }

    // 5. CTA da Seção de Logos Streaming
    const ctaStreamingLogos = document.getElementById('cta-streaming-logos');
    if (ctaStreamingLogos) {
        ctaStreamingLogos.href = CONFIG.checkoutUrl; 
        ctaStreamingLogos.addEventListener('click', () => trackEvent('CTA_Streaming_Logos_Click', { event: 'streaming_logos_cta_click', destination_url: CONFIG.checkoutUrl }));
    }

    // 6. CTA da Chamada Final
    const ctaFinalCall = document.getElementById('cta-final-call');
    if(ctaFinalCall) {
        ctaFinalCall.href = CONFIG.checkoutUrl;
        ctaFinalCall.addEventListener('click', () => trackEvent('CTA_Final_Call_Click', { event: 'final_cta_click', destination_url: CONFIG.checkoutUrl }));
    }

    // 7. CTA da Seção de Comparação
    const ctaComparison = document.getElementById('cta-comparison');
    if (ctaComparison) {
        ctaComparison.href = CONFIG.checkoutUrl;
        ctaComparison.addEventListener('click', () => trackEvent('CTA_Comparison_Click', { event: 'comparison_cta_click', destination_url: CONFIG.checkoutUrl }));
    }

    /* * [ALTERAÇÃO]
     * 8. CTAs da Tabela de Preços (4 Planos)
     * A lógica foi movida para a função helper 'setupPlanButtonListener'
     * para incluir o pop-up de desconto.
     */
    setupPlanButtonListener(
        document.getElementById('cta-mensal'),
        'Mensal',
        CONFIG.plans.mensal
    );
    setupPlanButtonListener(
        document.getElementById('cta-trimestral'),
        'Trimestral',
        CONFIG.plans.trimestral
    );
    setupPlanButtonListener(
        document.getElementById('cta-semestral'),
        'Semestral',
        CONFIG.plans.semestral
    );
    setupPlanButtonListener(
        document.getElementById('cta-anual'),
        'Anual',
        CONFIG.plans.anual
    );
    
    // 9. CTA da Seção de Garantia
    const ctaGuarantee = document.getElementById('cta-guarantee');
    if (ctaGuarantee) {
        ctaGuarantee.href = CONFIG.checkoutUrl;
        ctaGuarantee.addEventListener('click', () => trackEvent('CTA_Guarantee_Click', { event: 'guarantee_cta_click', destination_url: CONFIG.checkoutUrl }));
    }
    
    // 10. CTA de Suporte (WhatsApp)
    const ctaSupport = document.getElementById('cta-support');
    if (ctaSupport) {
        ctaSupport.href = CONFIG.supportUrl;
        ctaSupport.setAttribute('target', '_blank'); 
        ctaSupport.addEventListener('click', () => trackEvent('CTA_Support_Click', { event: 'support_cta_click', destination_url: CONFIG.supportUrl }));
    }
    
    // 12. Play do Vídeo Demo
    const appDemoVideo = document.getElementById('app-demo-video');
    if(appDemoVideo) {
        appDemoVideo.addEventListener('focus', () => {
             console.log('Evento: Interação com Vídeo Demo');
             trackEvent('Demo_Video_Play', {
                event: 'demo_video_interaction',
                video_url: appDemoVideo.src
            });
        }, { once: true }); // Dispara apenas uma vez
    }
}


/**
 * ===================================================================
 * MÓDULO DE TELEMETRIA E TRACKING (COM CAPI)
 * ===================================================================
 */
function trackEvent(eventName, payload, disableSheets = false) {
    
    // 1. Google Tag Manager (GTM)
    if (window.dataLayer && CONFIG.gtmId) {
        window.dataLayer.push(payload);
    }

    // 2. Meta Pixel (Browser-side)
    if (window.fbq && CONFIG.metaPixelId) {
        const standardEvents = ['PageView', 'ViewContent', 'AddToCart', 'Purchase', 'Lead', 'Search'];
        if (standardEvents.includes(eventName)) {
            window.fbq('track', eventName, payload);
        } else {
            window.fbq('trackCustom', eventName, payload);
        }
    }

    // 3. Webhook n8n
    if (CONFIG.n8n.enabled && CONFIG.n8n.url) {
        sendToWebhook(payload);
    }
    
    // 4. Google Sheets API
    if (CONFIG.googleSheets.enabled && CONFIG.googleSheets.appsScriptUrl && !disableSheets) {
        sendToGoogleSheets(payload);
    }

    // 5. Meta Conversions API (Server-side via Netlify)
    sendToServerSideCAPI(eventName, payload);
}

/**
 * Envia dados para o Webhook do n8n.
 */
async function sendToWebhook(payload) {
    try {
        await fetch(CONFIG.n8n.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Payload enviado ao n8n.');
    } catch (error) {
        console.error('Erro ao enviar para n8n:', error);
    }
}

/**
 * Envia dados para o Google Sheets via Google Apps Script (GAS).
 */
async function sendToGoogleSheets(payload) {
    try {
        const sheetData = {
            timestamp: new Date().toISOString(),
            event: payload.event || 'generic_event',
            detail: payload.movie_title || payload.search_query || payload.destination_url || payload.plan_name || 'N/A',
            full_payload: JSON.stringify(payload)
        };
        
        await fetch(CONFIG.googleSheets.appsScriptUrl, {
            method: 'POST',
            mode: 'no-cors', 
            body: JSON.stringify(sheetData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Payload enviado ao Google Sheets.');
    } catch (error) {
        console.error('Erro ao enviar para Google Sheets:', error);
    }
}

/**
 * ===================================================================
 * MÓDULO DE ANIMAÇÃO DE SCROLL (Intersection Observer)
 * ===================================================================
 */
function initScrollAnimations() {
    const targets = document.querySelectorAll('.animate-on-scroll');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                 entry.target.classList.remove('is-visible');
            }
        });
    }, {
        root: null, // Viewport
        threshold: 0.1 // 10% do elemento visível
    });

    targets.forEach(target => observer.observe(target));
}


/* =================================================================== */
/* [NOVO] MÓDULO DE API DE CONVERSÕES (CAPI) - NETLIFY   */
/* =================================================================== */

/**
 * Pega os cookies _fbp e _fbc para enviar ao servidor
 */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

/**
 * Envia o evento para o nosso servidor (Netlify Function)
 */
async function sendToServerSideCAPI(eventName, payload) {
    try {
        // Prepara os dados para o nosso servidor
        const capiPayload = {
            eventName: eventName,
            eventSourceUrl: window.location.href, // URL onde o evento ocorreu
            userData: {
                // Tenta pegar os cookies _fbp e _fbc (se existirem)
                fbp: getCookie('_fbp') || null,
                fbc: getCookie('_fbc') || null,
                // email: "usuario@email.com", // (Exemplo se você coletar)
            },
            customData: {
                value: payload.value || null, // Pega o valor do payload do evento
                currency: payload.currency || 'BRL' // Pega a moeda do payload ou usa BRL
            }
        };

        // URL da Netlify Function (caminho relativo)
        const serverApiUrl = '/api/track'; 

        await fetch(serverApiUrl, {
            method: 'POST',
            body: JSON.stringify(capiPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`[CAPI-Frontend] Evento '${eventName}' enviado ao servidor Netlify.`);

    } catch (error) {
        console.error('[CAPI-Frontend] Erro ao enviar evento para o servidor:', error);
    }
}


/* =================================================================== */
/* [NOVO] MÓDULO DE SOCIAL PROOF (NOTIFICAÇÃO)                       */
/* =================================================================== */

/**
 * Gera um número inteiro aleatório dentro de um intervalo.
 * @param {number} min - O valor mínimo (inclusivo).
 * @param {number} max - O valor máximo (inclusivo).
 * @returns {number} O número aleatório.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Variável global para armazenar a contagem de visitantes estática desta sessão.
let currentVisitorCount = 0; 

// Constantes de configuração do Toast
const TOAST_MIN_INTERVAL = 10000; // 10 segundos
const TOAST_MAX_INTERVAL = 30000; // 30 segundos
const TOAST_DISPLAY_TIME = 5000;  // 5 segundos

/**
 * Exibe a notificação (toast) de prova social.
 */
function showSocialProofToast() {
    const toastElement = document.getElementById('social-proof-toast');
    const visitorCountElement = document.getElementById('visitor-count');

    if (!toastElement || !visitorCountElement) {
        console.warn('Elementos do Social Proof Toast não encontrados.');
        return; 
    }

    // 1. Atualiza o texto (o número de visitantes é estático, o título é fixo)
    visitorCountElement.textContent = `${currentVisitorCount} pessoas estão nesta página`;

    // 2. Mostra o toast (ativa a animação CSS)
    toastElement.classList.add('visible');

    // 3. Agenda o desaparecimento do toast
    setTimeout(() => {
        toastElement.classList.remove('visible');
        
        // 4. Agenda a *próxima* exibição (após o toast atual desaparecer)
        scheduleNextToast();
    }, TOAST_DISPLAY_TIME);
}

/**
 * Agenda a próxima exibição do toast em um intervalo aleatório.
 */
function scheduleNextToast() {
    const randomInterval = getRandomInt(TOAST_MIN_INTERVAL, TOAST_MAX_INTERVAL);
    
    setTimeout(showSocialProofToast, randomInterval);
}

/**
 * Inicializa o sistema de prova social.
 */
function initSocialProof() {
    // 1. Define a contagem de visitantes (entre 50 e 1000) para esta sessão.
    currentVisitorCount = getRandomInt(50, 1000);

    // 2. Agenda a *primeira* exibição do toast.
    // Usamos um timeout inicial mais curto (ex: 7-12s) para o usuário ver a primeira vez.
    const firstInterval = getRandomInt(7000, 12000); 
    setTimeout(showSocialProofToast, firstInterval);
}
