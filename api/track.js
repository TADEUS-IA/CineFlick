// Arquivo: api/track.js

// [CORREÇÃO DEFINITIVA] Importa o módulo SDK principal de forma segura
const bizSdk = require('facebook-nodejs-business-sdk');
const FacebookAdsApi = bizSdk.FacebookAdsApi;
const ServerEvent = bizSdk.ServerEvent;
const UserData = bizSdk.UserData;
const Pixel = bizSdk.Pixel; // Agora 'Pixel' estará definido corretamente

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
 * Handler da Vercel:
 * A Vercel trata este arquivo (api/track.js) como um endpoint (/api/track)
 * 'req' (Request) e 'res' (Response) são os objetos HTTP.
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

    try {
        // 4. PROCESSA OS DADOS DO FRONTEND
        // A Vercel já faz o parse do JSON automaticamente
        const { eventName, eventSourceUrl, userData, customData } = req.body;

        // 5. PREPARA OS DADOS DO USUÁRIO
        // A Vercel nos dá o IP e o User Agent de forma diferente
        const clientIpAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const clientUserAgent = req.headers['user-agent'];
        const eventId = crypto.randomUUID(); 

        // [CORREÇÃO] Usa a classe 'UserData' importada corretamente
        const metaUserData = new UserData()
            .setEmails(userData.email ? [String(userData.email)] : [])
            .setPhones(userData.phone ? [String(userData.phone)] : [])
            .setClientIpAddress(clientIpAddress)
            .setClientUserAgent(clientUserAgent)
            .setFbp(userData.fbp || null)
            .setFbc(userData.fbc || null);

        // 6. PREPARA O EVENTO
        const currentTimestamp = Math.floor(new Date() / 1000);
        // [CORREÇÃO] Usa a classe 'ServerEvent' importada corretamente
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
        
        // [CORREÇÃO] Usa a classe 'Pixel' importada corretamente
        const response = await Pixel.sendServerEvent(PIXEL_ID, eventsData); 
        
        console.log('[CAPI-Vercel] Resposta do Meta:', response);

        // 8. RETORNA SUCESSO PARA O FRONTEND
        return res.status(200).json({
            status: 'success',
            message: 'Evento rastreado via CAPI.',
            fb_response: response
        });

    } catch (error) {
        console.error('[CAPI-Vercel] Erro ao processar evento:', error.response ? error.response.data : error.message);
        
        // 9. RETORNA ERRO PARA O FRONTEND
        return res.status(500).json({
            status: 'error',
            message: 'Falha ao rastrear evento via CAPI.'
        });
    }
};