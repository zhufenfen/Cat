export default {
    handle(state,params){
        state.lists = params;
    },
    collect(state,params){
        state.colls = params;
    },
}