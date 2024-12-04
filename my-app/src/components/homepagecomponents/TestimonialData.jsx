export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGN1nrQ8_o8gep_pzZkfoT_00QfRRQ-toOew&s',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_7GgY7DnDKAfJcEEQ9ZFTxOWqQLev0fFIg&s',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_7GgY7DnDKAfJcEEQ9ZFTxOWqQLev0fFIg&s',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_7GgY7DnDKAfJcEEQ9ZFTxOWqQLev0fFIg&s',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                
            },

            

        ];
    },

    

   

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

