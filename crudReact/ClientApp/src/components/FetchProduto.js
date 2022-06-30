import React, { Component } from "react"
import { Link } from 'react-router-dom'





export class FetchProduto extends Component {
    static displayName = "Produtos";

    constructor() {
        super();
        this.state = { produtos:[], loading: true }
    }

    componentDidMount() {
        this.populaProdutoData();
    }
    static handleEdit(id) {
        window.location.href = "/produto/edit" + id;
    }
    static handleDelete(id) {
        if (!window.confirm.confirm("Voce deseja deletar o produto : " + id)) {
            return;
        } else {
            fetch('api/produtos/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-produto";
                    alert('Deletado com Sucesso');
                })
            }
    }

    static renderProdutosTabela() {

    }

        render() {
            let contents = this.state.loading
                ? <p><em> Carregando... </em></p>
                : FetchProduto.renderProdutosTabela(this.state.produtos);

            return (
                <div>
                    <h1 id="tabelLabel">Produtos</h1>
                    <p>Tela de Listagem de Produtos</p>

                    <p>
                        <Link to="add-produto">Cadastrar Profuto</Link>
                    </p>
                    {contents}
                </div>
             );
        }
        async popularProdutoData() {
            const response = await fetch('api/Produtos')
            const data = await response.json();
            this.setState({ produtos: data, loading: false });
    }
}
