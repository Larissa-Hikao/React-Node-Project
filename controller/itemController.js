const Item = require('../models/itemModel')

exports.postNovoItem = (req, res, next) => {
    let novoItem = new Item( req.body.nome) 
    novoItem.salvar()
    res.redirect('/itens')
}

exports.getNovoItem = (req, res, next) => {
    res.render('novoItem');
}

exports.getItem = (req, res, next) => {
    console.log('getItem');
    res.render('Item',{
      'item': Item.listar(),
    });
  }