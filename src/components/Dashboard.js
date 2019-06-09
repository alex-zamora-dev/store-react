export default class dashboardData {
    constructor() {
        this.data = {
            ciudad: '',
            col: '',
            cp: '',
            del: '',
            calle: '',
            fecha: '',
            products: [],
            tipoPago: '',
            canal: 'web'
        };
    }

    getData(orderSuccess) {
        this.data.ciudad = orderSuccess.deleveryAddressDetail.city;
        this.data.col = orderSuccess.deleveryAddressDetail.neighborhood;
        this.data.del = orderSuccess.deleveryAddressDetail.delegation;
        this.data.calle = orderSuccess.deleveryAddressDetail.address1;
        this.data.cp = orderSuccess.deleveryAddressDetail.postalCode;
        this.data.fecha = orderSuccess.purchaseDate;
        this.data.tipoPago = orderSuccess.orderSuccessTotal.payemntMethod;

        orderSuccess.ItemDetails.success.forEach(element => {
            element.deliveryInfo.forEach(elementTwo => {
                elementTwo.packedList.forEach(elementThree => {
                    this.data.products.push({
                        sku: elementThree.sku,
                        cantidad: elementThree.quantity.toString(),
                        // nombre: elementThree.displayName,
                        tipoProducto: elementThree.ProductType,
                        fechaEstimada: elementThree.estimatedDeliveryDate === undefined 
                            ? elementThree.EddErrorMessage 
                            : elementThree.estimatedDeliveryDate,
                        noPedido: element.trackingNumber
                    });
                });
            });
        });

        // console.log("DATA POST FIREBASE",  this.data);
        // console.log("TIPO PRODUCTOS",  this.tipoProductos);

        if (this.data.products.length > 0) {
            this.data.products.forEach((element, index) => {
                if (element.tipoProducto === 'Soft Line') {
                    console.log("POST FIREBASE");
                    
                    const newObj = {
                        ciudad: this.data.ciudad,
                        col: this.data.col,
                        cp: this.data.cp,
                        del: this.data.del,
                        calle: this.data.calle,
                        fecha: this.data.fecha,
                        products: [],
                        tipoPago: this.data.tipoPago,
                        canal: 'web'
                    }

                    newObj.products.push({
                        sku: element.sku,
                        cantidad: element.cantidad,
                        noPedido: element.noPedido,
                        fechaEstimada: element.fechaEstimada
                    })

                    console.log(newObj);

                    // this.postData(newObj);
                }
            })
        }
    }

    postData(newObj) {

        fetch('https://us-central1-fechaestimadaentregaprod.cloudfunctions.net/webWapQA',{
            method: 'POST',
            body: JSON.stringify(newObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => { console.log('Dashboard Success') })
        .catch(err => console.log(err));
    }
}
