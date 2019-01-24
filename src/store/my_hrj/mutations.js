export default {
    handle(state,params){
        state.lists = params;
        console.log(state.lists)
    },
    collect(state,params){
        state.colls = params;
    },
}