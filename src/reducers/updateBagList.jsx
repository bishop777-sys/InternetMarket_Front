const updateBagList = (state, action) =>{
    if(state === undefined){
        return{
            bag: [],
            loading: true,
            error: null
        }
    }

    switch(action.type){
        case "ADD_BAG_LIST":
            return{
                bag:[],
                loading: true,
                error: null
            }
        default:
            return{
                bag:[],
                loading: true,
                error: null
            }
    }
}


export default updateBagList;