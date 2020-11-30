
var itemLojas = $('.options-list .lojas')
var itemContato = $('.options-list .contato')
var itemSuporte = $('.options-list .ajuda-e-suporte')
var itemPagamento = $('.options-list .formas-de-pagamento')

itemLojas.addEventListener('click', function() {
  $('.options-list .contato .options-sublist').classList.remove('show')
  $('.options-list .ajuda-e-suporte .options-sublist').classList.remove('show')
  $('.options-list .formas-de-pagamento .options-sublist').classList.remove('show')
  $('.options-list .lojas .options-sublist').classList.toggle('show')
})

itemContato.addEventListener('click', function() {
  $('.options-list .lojas .options-sublist').classList.remove('show')
  $('.options-list .ajuda-e-suporte .options-sublist').classList.remove('show')
  $('.options-list .formas-de-pagamento .options-sublist').classList.remove('show')
  $('.options-list .contato .options-sublist').classList.toggle('show')
})

itemSuporte.addEventListener('click', function() {
  $('.options-list .contato .options-sublist').classList.remove('show')
  $('.options-list .lojas .options-sublist').classList.remove('show')
  $('.options-list .formas-de-pagamento .options-sublist').classList.remove('show')
  $('.options-list .ajuda-e-suporte .options-sublist').classList.toggle('show')
})

itemPagamento.addEventListener('click', function() {
  $('.options-list .contato .options-sublist').classList.remove('show')
  $('.options-list .ajuda-e-suporte .options-sublist').classList.remove('show')
  $('.options-list .lojas .options-sublist').classList.remove('show')
  $('.options-list .formas-de-pagamento .options-sublist').classList.toggle('show')
})