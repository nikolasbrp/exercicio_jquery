$(document).ready(function() {
    $('#btn-add-tarefa').click(function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-tarefa').val();        

        const novoItem = $('<li></li>');
        $(`<p>&#x2022; ${nomeDaTarefa}</p>`).appendTo(novoItem);        
        $(novoItem).appendTo('main ul');
        $('#nome-tarefa').val(''); 
    });

    $('main ul').on('click', 'li', function() {
        $(this).toggleClass('texto-riscado');
    });
});
