import React from "react"

const WebsiteCampanha = ({campanha}) =>
            <div>
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ml-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper"> <small>por: </small><b>Fulano de Tal</b></span>
                                        <span className="section-heading-lower">{campanha.nome}</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="img/products-01-menor.jpg" alt="" />
                            <div className="product-item-description d-flex mr-auto">
                                <div className="bg-faded p-5 rounded">
                                    <p className="mb-0">{campanha.descricao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

export default WebsiteCampanha
