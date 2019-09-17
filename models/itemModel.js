const path = require('path')
const fs = require('fs')


const dbPath = path.join(
    path.dirname(process.mainModule.filename),'data','itens.json'
)

class Item{
    constructor(nome){
        this.nome=nome
    }

    //lerItens()

    salvar(){
        let itens=[]

        try{
            let datas =fs.readFileSync(dbPath)
            itens=JSON.parse(datas.toString())
        } catch (e){}
        itens.push(this)
        fs.writeFileSync(dbPath, JSON.stringify(itens))
    }
    static listar(){
        let itens=[]

        try{
            let datas =fs.readFileSync(dbPath)
            console.log(datas);
            ptens=JSON.parse(datas.toString())
        } catch (e){
            console.log(e);
        }
        console.log(itens);
        return itens
    }
}

module.exports = Item