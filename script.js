class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }
    Adicionar() {
        let produto = this.LerDados()
        if (this.Validar(produto) == true) {
            this.Salvar(produto)
        }
        this.Listar()

    }
    LerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('pdpreco').value

        return produto
    }

    Validar(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do produto! \n'
        }
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do produto! \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }
    Salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id++;
    }

    Listar(){
        let tbody = document.querySelector("tbody")
        tbody.innerText = ''
        
        // Armazenar uma referência ao objeto Produto
        let self = this;
        
        for(let i = 0; i < this.arrayProdutos.length; i++ ) {
    
            let tr = tbody.insertRow();
    
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();
    
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = 'R$ ' + this.arrayProdutos[i].precoProduto;
    
            let imagem = document.createElement('img')
            imagem.src = 'delete.png'
            imagem.onclick = (function(id) {
                return function() {
                    self.Deletar(id);
                }
            })(this.arrayProdutos[i].id);
            td_del.appendChild(imagem)
    
            td_id.classList.add("centralizado");
            td_nome.classList.add("centralizado");
            td_preco.classList.add("centralizado");
            td_del.classList.add("centralizado");
        }
    }

    Cancelar() {
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }


    Deletar(id) {
        let tbody = document.querySelector('.tbody')
    
        // Encontre o índice do produto com o id correspondente
        let index = this.arrayProdutos.findIndex(produto => produto.id == id);
        
        if (index > -1) {
            // Remova o produto do array
            this.arrayProdutos.splice(index, 1);
            
            // Remova a linha correspondente da tabela
            tbody.deleteRow(index);
        } else {
            console.error('Produto não encontrado: ', id);
        }
    }
    



}

var produto = new Produto()