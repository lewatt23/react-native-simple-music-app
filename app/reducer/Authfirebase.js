var  defalutState ={
    Login:false
} 

module.exports = (state=defalutState,action) =>{
         switch(action.type){
             case 'AUTH_USER':
              return {
                  Login:true
              }

             case 'UNAUTH_USER':
             return {
                 Login:false
             }

             default :
             return state;
         }
}