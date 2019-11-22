const updateShopList = (state, action) =>{
    if(state === undefined){
        return{
            Shop: [],
            loading: true,
            error: null
        }
    }

    switch(action.type){
        case "ADD_SHOP_LIST":
            return{
                Shop:[],
                loading: true,
                error: null
            }
        default:
            return{
                Shop:[],
                loading: true,
                error: null
            }
    }
}


export default updateShopList;