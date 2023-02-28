export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    /* token:"BQDP66l4OHS-BQYRXTGUgfy7fbbujsQghxc9VZRUbyWZZuvjqrN8-d-oAVZ0iZPLbWco6kb_NnQ_I0g3hTCn6X1xA3l5KCNzTkkEq8bJLinYZx4eN-1ABsIkIvsk6x5KGCVrPSte2DeJ7Dc9ShrEiQqFQ21ghwS6zPb5lOz-mWumUHyd3uJ2WbuxE4rp2E1EmkL-VbxWQuFJLjPFk7kyqw" */
}

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };

        case 'SET_TOKEN':
            return{...state,
            token: action.token,
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
            default:
                return state;
    }
};

export default reducer;