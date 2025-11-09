// Arquivo: api/track.js
// [CORREÇÃO V8 - TESTE DE DIAGNÓSTICO]

// Importa o módulo SDK
const bizSdk = require('facebook-nodejs-business-sdk');

/**
 * Handler da Vercel
 */
module.exports = async (req, res) => {
    
    // Testa se o módulo principal foi carregado
    if (!bizSdk) {
        console.error('[CAPI-Diagnóstico] ERRO CRÍTICO: bizSdk (o módulo) está undefined.');
        return res.status(500).json({ status: 'error', message: 'SDK falhou ao carregar.' });
    }

    // Tenta acessar as classes de diferentes formas e loga o resultado
    const diagnostics = {
        bizSdk_Type: typeof bizSdk,
        bizSdk_Has_Default: bizSdk.default !== undefined,
        bizSdk_Has_Pixel: bizSdk.Pixel !== undefined,
        bizSdk_Has_ServerEvent: bizSdk.ServerEvent !== undefined,
        bizSdk_Has_UserData: bizSdk.UserData !== undefined,
        bizSdk_Has_Objects: bizSdk.objects !== undefined,
    };

    // Se a Vercel envolveu em um 'default', tenta inspecionar o 'default'
    if (bizSdk.default) {
        diagnostics.default_Has_Pixel = bizSdk.default.Pixel !== undefined;
        diagnostics.default_Has_ServerEvent = bizSdk.default.ServerEvent !== undefined;
    }

    // Se tiver 'objects', inspeciona o 'objects'
    if (bizSdk.objects) {
        diagnostics.objects_Has_Pixel = bizSdk.objects.Pixel !== undefined;
        diagnostics.objects_Has_ServerEvent = bizSdk.objects.ServerEvent !== undefined;
    }
    
    // Loga o resultado do diagnóstico
    console.log('[CAPI-Diagnóstico] Resultado da Inspeção do SDK:', JSON.stringify(diagnostics, null, 2));

    // Retorna 200 (OK) com o resultado do diagnóstico
    // Isso vai parar os erros 500.
    return res.status(200).json({
        status: 'success',
        message: 'Diagnóstico concluído. Verifique os logs da Vercel.',
        diagnostics: diagnostics
    });
};
