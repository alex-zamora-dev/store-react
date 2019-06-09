import React, { Component } from 'react';
import Dashboard from './Dashboard';

export default class Cart extends Component {

    constructor() {
        super();
        this.orderSuccess = {
            ItemDetails: {
                success: [
                    {
                        deliveryInfo: [
                            {
                                packedList: [
                                    {
                                        EddErrorMessage: "Por ahora no es posible mostrar la fecha de entrega",
                                        ProductType: "Soft Line",
                                        displayName:"Casco Prowell F-44r Raden",
                                        quantity: 1,
                                        sku: "1022117978"
                                    },
                                    {
                                        EddErrorMessage: "Por ahora no es posible mostrar la fecha de entrega",
                                        ProductType: "Soft Line",
                                        displayName: "Seguros para Rines 12 mm x 1.5 Birlo Mikel's SPR-4",
                                        quantity: 1,
                                        sku: "36986514"
                                    }
                                ]
                            }
                        ],
                        itemType: "Soft Line",
                        tienda: "039",
                        trackingNumber: "0390096304"
                    },
                    {
                        deliveryInfo: [
                            {
                                packedList: [
                                    {
                                        ProductType: "Soft Line",
                                        displayName: "STARK RACK 74932 ejemplo Amarillo brillante",
                                        estimatedDeliveryDate: "09 de junio-12 de junio",
                                        quantity: 1,
                                        sku: "1030399133"
                                    }
                                ]
                            }
                        ],
                        itemType: "Soft Line",
                        tienda: "039",
                        trackingNumber: "0390096303"
                    }
                ]
            },
            deleveryAddressDetail: {
                address1: "ceuni 315, santiago jaltepec",
                city: "pachuca",
                delegation: "MINERAL DE LA REFORMA",
                neighborhood: "AZOYATLA DE OCAMPO",
                postalCode: "42182",
                state: "HIDALGO"
            },
            orderSuccessTotal: {
                payemntMethod: "paypal"
            },
            purchaseDate: "martes 04 de junio de 2019 03:33",
        }
    }

    dashboardFirebase = () => {
        const demo = new Dashboard();
        demo.getData(this.orderSuccess);
    }
    
    render() {
        return (
            <div>
                <h3>hello from cart TT</h3>
                <button 
                    className="btn btn-success"
                    onClick={this.dashboardFirebase}
                >
                    POST Firebase
                </button>
            </div>
        )
    }
}