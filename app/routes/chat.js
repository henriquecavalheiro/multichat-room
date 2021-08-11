module.exports = function(application){

    /* recebe o /chat via post, e executa a função na propriedade iniciaChat, do módulo chat, via controller */
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

}