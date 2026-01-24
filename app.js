<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Conteúdo PAUSE | Premium Experience</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&display=swap" rel="stylesheet">

    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'SEU_PIXEL_ID_AQUI'); 
        fbq('track', 'PageView');
    </script>

    <style>
        :root {
            --bg-color: #000000;
            --card-bg: #0a0a0a;
            --primary-red: #e50914; 
            --white: #ffffff;
            --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { 
            margin: 0; padding: 0; box-sizing: border-box; 
            -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; 
        }

        body {
            background-color: var(--bg-color);
            color: var(--white);
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            padding: 20px;
            overflow-x: hidden;
            overflow-y: auto; 
            touch-action: pan-y; 
        }

        .container {
            width: 100%;
            max-width: 850px;
            margin: auto;
            text-align: center;
        }

        .logo {
            max-width: 120px;
            margin-bottom: 20px;
            pointer-events: none;
        }

        /* CONTAINER DO VÍDEO COM ENQUADRAMENTO DINÂMICO */
        .video-wrapper {
            position: relative;
            width: 100%;
            padding-top: 56.25%; /* 16:9 Ratio */
            background: #000;
            border-radius: 12px;
            border: 1px solid #1a1a1a;
            box-shadow: 0 0 50px rgba(229, 9, 20, 0.15);
            overflow: hidden;
        }

        /* O PLAYER FICA "POR BAIXO" E SEM CONTROLES */
        #mainVideo {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border: none;
            pointer-events: none; /* Bloqueia interação direta com o YouTube */
        }

        /* CAMADA TRANSPARENTE QUE RECEBE OS CLIQUES - IMPEDE VER A LOGO */
        .video-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 10;
            cursor: pointer;
        }

        .custom-controls {
            background: var(--card-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 15px;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            border: 1px solid #1a1a1a;
            border-top: none;
        }

        .control-btn {
            background: none; border: none; color: #555;
            cursor: pointer; font-size: 10px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 1px;
            transition: var(--transition);
        }

        .control-btn:hover { color: var(--white); }
        #playPauseBtn { color: var(--primary-red); font-size: 12px; }

        .rotate-instruction {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }

        .phone-icon {
            width: 20px; height: 35px;
            border: 2px solid var(--white); border-radius: 4px;
            position: relative;
            animation: rotatePhone 2.5s ease-in-out infinite;
        }

        @keyframes rotatePhone {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(90deg); }
            100% { transform: rotate(0deg); }
        }

        .rotate-text { font-size: 10px; color: #777; text-transform: uppercase; }

        .cta-button {
            display: none; 
            margin-top: 30px;
            padding: 18px 40px;
            width: 90%;
            max-width: 400px;
            background-color: var(--primary-red);
            color: var(--white);
            font-family: 'Anton', sans-serif;
            font-size: 24px;
            border-radius: 6px;
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4);
            animation: slideUp 0.8s ease forwards;
        }

        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        /* AJUSTE PARA ENCAIXE PERFEITO NO MODO DE LADO (IOS/ANDROID) */
        @media (orientation: landscape) and (max-height: 500px) {
            body { padding: 5px; }
            .container { max-width: 520px; }
            .logo { max-width: 80px; margin-bottom: 5px; }
            .rotate-instruction { display: none; }
            .cta-button { margin-top: 15px; font-size: 20px; padding: 12px; }
            footer { margin-top: 15px; }
        }

        footer { margin-top: 40px; margin-bottom: 20px; font-size: 9px; color: #333; }
    </style>
</head>
<body oncontextmenu="return false;">

    <div class="container">
        <img src="logo.png" alt="Logo" class="logo">

        <div class="video-wrapper">
            <div class="video-overlay" onclick="togglePlay()"></div>
            <div id="mainVideo"></div>
        </div>

        <div class="custom-controls">
            <button class="control-btn" onclick="seek(-10)">-10s</button>
            <button class="control-btn" id="playPauseBtn" onclick="togglePlay()">REPRODUZIR</button>
            <button class="control-btn" onclick="seek(10)">+10s</button>
        </div>

        <div class="rotate-instruction">
            <div class="phone-icon"></div>
            <p class="rotate-text">Vire a tela para uma melhor visualização</p>
        </div>

        <button id="ctaBtn" class="cta-button" onclick="handleAction()">
            ASSISTIR AGORA
        </button>
    </div>

    <footer>
        &copy; 2026 EXPERIÊNCIA PRIVADA. TODOS OS DIREITOS RESERVADOS.
    </footer>

    <script src="https://www.youtube.com/iframe_api"></script>

    <script>
        let player;
        const playPauseBtn = document.getElementById('playPauseBtn');
        const ctaBtn = document.getElementById('ctaBtn');
        const REVEAL_TIME = 215; 
        let shown = false;

        // Inicializa o vídeo do YouTube com as travas de interface solicitadas
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('mainVideo', {
                videoId: 'v_GUMeiU-AU', // ID DO VÍDEO AQUI
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,          // SEM CONTROLES ORIGINAIS
                    'modestbranding': 1,    // TIRA LOGO GRANDE
                    'rel': 0,               // SEM VÍDEOS RELACIONADOS
                    'showinfo': 0,
                    'iv_load_policy': 3,
                    'disablekb': 1,
                    'playsinline': 1        // IMPORTANTE PARA IOS NÃO ABRIR FULLSCREEN NATIVO
                },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function togglePlay() {
            const state = player.getPlayerState();
            if (state === YT.PlayerState.PLAYING) {
                player.pauseVideo();
                playPauseBtn.innerText = "REPRODUZIR";
            } else {
                player.playVideo();
                player.unMute(); // GARANTE O SOM AO CLICAR
                playPauseBtn.innerText = "PAUSAR";
                fbq('track', 'ViewContent');
            }
        }

        function seek(s) {
            const current = player.getCurrentTime();
            player.seekTo(current + s, true);
        }

        function onPlayerStateChange(event) {
            if (event.data === YT.PlayerState.PLAYING) {
                const checkTime = setInterval(() => {
                    let time = player.getCurrentTime();
                    if (!shown && time >= REVEAL_TIME) {
                        shown = true;
                        ctaBtn.style.display = 'inline-block';
                        ctaBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        clearInterval(checkTime);
                    }
                    if (player.getPlayerState() !== YT.PlayerState.PLAYING) clearInterval(checkTime);
                }, 1000);
            }
        }

        // FUNCIONALIDADES ORIGINAIS: PIXEL, N8N E GOOGLE APP SCRIPT (PRESERVADAS)
        async function handleAction() {
            fbq('track', 'Lead');

            const payload = {
                event: "clique_botao_vsl",
                url: window.location.href,
                time: new Date().toISOString()
            };

            try {
                // Envio para N8N
                fetch('SUA_URL_DO_N8N_AQUI', { 
                    method: 'POST', 
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(payload) 
                });

                // Envio para GOOGLE APP SCRIPT
                fetch('SUA_URL_DO_GOOGLE_APP_SCRIPT_AQUI', { 
                    method: 'POST', 
                    mode: 'no-cors',
                    body: JSON.stringify(payload) 
                });

            } catch (e) {
                console.log("Erro no disparo dos dados");
            }

            setTimeout(() => {
                window.location.href = "https://pay.kirvano.com/r/e07842fc-6bae-41cb-a4af-9c8dc0f4a6fe";
            }, 500); 
        }

        document.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) { event.preventDefault(); }
        }, { passive: false });
    </script>
</body>
</html>
