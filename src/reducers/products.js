var initialState = [
    {
        id : 1,
        name : 'IP7',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_1.jpg',
        description : "Apple's",
        price : 800,
        inventory : 10,
        rating : 3
    },
    {
        id : 2,
        name : 'IP8',
        image : 'https://static.toiimg.com/photo/65625284/Apple-iPhone-XS.jpg',
        description : "Apple's",
        price : 1100,
        inventory : 8,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return state;
    }
}

export default products;