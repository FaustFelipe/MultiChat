module.exports.chat = function(application, request, response) {

	var dadosForm = request.body;

	request.assert('apelido', 'Nome ou apelido e obrigatorio').notEmpty();
	request.assert('apelido', 'Nome ou apelido deve conter no minimo 3 caracteres.').len(3);

	var error = request.validationErrors();

	if (error) {
		// response.send('Erros no formulario');
		response.render('index', {validacao : error});
		return;
	}

	application.get('io').emit('msgParaCliente', {apelido : dadosForm.apelido, mensagem : ' entrou no chat'});

	response.render('chat', {dadosForm : dadosForm});
}