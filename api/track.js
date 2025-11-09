// Arquivo: api/track.js
// [CORREÇÃO V6 - DEFINITIVA]

const bizSdk = require('facebook-nodejs-business-sdk');

// [CORREÇÃO] Tenta importar as classes do objeto principal ou do 'default',
// o que for que o bundler da Vercel tenha disponibilizado.
const FacebookAdsApi = bizSdk.FacebookAdsApi || bizSdk.default.FacebookAdsApi;
const ServerEvent = bizSdk.ServerEvent || bizSdk.default.ServerEvent;
const UserData = bizSdk.UserData || bizSdk.default.UserData;
const Pixel = bizSdk.Pixel || bizSdk.default.Pixel;

const crypto = require('crypto');

// 1. CARREGA AS VARIÁVEIS DE AMBIENTE (da Vercel)
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const PIXEL_ID = process.env.META_PIXEL_ID;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

// 2. INICIALIZA A API DO META
if (!ACCESS_TOKEN) {
    console.error('Erro Crítico: META_CAPI_ACCESS_TOKEN não está definido.');
}
const api = FacebookAdsApi.init(ACCESS_TOKEN);
// api.setDebug(true); // Descomente para logs detalhados

/**
 * Handler da Vercel
 */
module.exports = async (req, res) => {
    
    // 3. VERIFICAÇÃO DE SEGURANÇA E MÉTODO
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'error', message: 'Método não permitido.' });
    }

    // Verifica se as chaves estão carregadas
    if (!ACCESS_TOKEN || !PIXEL_ID) {
        console.error('Erro de Configuração: Chaves do Meta não encontradas no ambiente.');
        return res.status(500).json({ status: 'error', message: 'Erro interno de configuração do servidor.' });
    }

    // [CORREÇÃO DE BUG] Verifica se as classes do SDK foram carregadas
    if (!ServerEvent || !UserData || !Pixel) {
         console.error('[CAPI-Vercel] Falha ao carregar classes do SDK (ServerEvent, UserData ou Pixel estão undefined). Verifique as importações.');
         return res.status(500).json({ status: 'error', message: 'Erro interno de configuração do SDK no servidor.' });
    }

    try {
        // 4. PROCESSA OS DADOS DO FRONTEND
        const { eventName, eventSourceUrl, userData, customData } = req.body;

        // 5. PREPARA OS DADOS DO USUÁRIO
        const clientIpAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const clientUserAgent = req.headers['user-agent'];
        const eventId = crypto.randomUUID(); 

        const metaUserData = new UserData()
            .setEmails(userData.email ? [String(userData.email)] : [])
            .setPhones(userData.phone ? [String(userData.phone)] : [])
            .setClientIpAddress(clientIpAddress)
            .setClientUserAgent(clientUserAgent)
            .setFbp(userData.fbp || null)
            .setFbc(userData.fbc || null);

        // 6. PREPARA O EVENTO
        const currentTimestamp = Math.floor(new Date() / 1000);
        
        const serverEvent = new ServerEvent()
            .setEventName(eventName)
            .setEventTime(currentTimestamp)
            .setEventSourceUrl(eventSourceUrl)
            .setUserData(metaUserData)
            .setEventId(eventId)
            .setActionSource('website');

        if (customData && customData.value) {
            serverEvent.setCustomData({
                value: customData.value,
                currency: customData.currency || 'BRL'
            });
        }
        
        if (TEST_EVENT_CODE) {
            serverEvent.setTestEventCode(TEST_EVENT_CODE);
            console.log(`[CAPI-Vercel] MODO DE TESTE ATIVADO. Código: ${TEST_EVENT_CODE}`);
        }
        
        const eventsData = [serverEvent];

        // 7. ENVIA PARA O META
        console.log(`[CAPI-Vercel] Enviando evento: ${eventName} para Pixel ID: ${PIXEL_ID}`);
        
        const response = await Pixel.sendServerEvent(PIXEL_ID, eventsData); 
        
        console.log('[CAPI-Vercel] Resposta do Meta:', response);

        // 8. RETORNA SUCESSO PARA O FRONTEND
        return res.status(200).json({
            status: 'success',
            message: 'Evento rastreado via CAPI.',
            fb_response: response
        });

    } catch (error) {
        // Captura o erro
        const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
        console.error('[CAPI-Vercel] Erro ao processar evento:', errorMessage);
        
        // 9. RETORNA ERRO PARA O FRONTEND
        return res.status(500).json({
            status: 'error',
            message: 'Falha ao rastrear evento via CAPI.',
            error_details: errorMessage
        });
    }
};
