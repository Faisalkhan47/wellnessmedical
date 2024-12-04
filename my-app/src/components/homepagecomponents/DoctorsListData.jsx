
export const ProductService = {
    getProductsData() {
        return [
            {
                name: 'Dr Vinod Raina',
                hospital:'Fortis Memorial Research Institute, Gurgaon',
                image:'https://i.imghippo.com/files/JGFL9742xqw.webp',
                link:''
                
            },
            {
                name: 'Dr Hitesh Garg',
                hospital:'Artemis Hospital Gurgaon',
                image:'https://i.imghippo.com/files/UvV1449cZg.jpg',
                link:''
            },
            {
                name: 'Dr Sanjay Gogoi',
                hospital:'BLK-Max Super Speciality Hospital Delhi',
                image:"https://i.imghippo.com/files/btfA7750NMw.jpg",
                link:''
            },
            {
                name: 'Dr Naresh Trehan',
                hospital:'Medanta - The Medicity Hospital, Gurgaon',
                image:'https://i.imghippo.com/files/yELf6900ACQ.png',
                link:''
            },
            {
                name: 'Dr I P S Oberoi',
                hospital:'Artemis Hospital Gurgaon',
                image:'https://i.imghippo.com/files/mhl1172gM.webp',
                link:''
            },
            {
                name: 'Dr Sandeep Vaishya',
                hospital:'Fortis Memorial Research Institute, Gurgaon',
                image:'https://i.imghippo.com/files/rL8278CWE.jpg',
                link:''
            }
        ];
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },
};

