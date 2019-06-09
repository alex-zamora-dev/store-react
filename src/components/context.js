import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    // Get all products API
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            // console.log({...item});
            tempProducts = [ ...tempProducts, singleItem ];
            // console.log(tempProducts);
        });
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product; 
    }
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }
    addToCart = (id) => {
        // console.log("Hello from add to cart, id: ", id);
        let tempProducts = [...this.state.products];
        console.log(tempProducts);
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
    }
    tester = () => {
        console.log('State products inCart: ', this.state.products[0].inCart);
        console.log('Data products inCart: ', storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(()=>{
            return { products:tempProducts }
        },()=>{
            console.log('State products inCart: ', this.state.products[0].inCart);
            console.log('Data products inCart: ', storeProducts[0].inCart);     
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                // products: this.state.products
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {/* <button onClick={this.tester}>Test Me</button> */}
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer } 