let redux = require('redux');
let isAuthenticate = '';
let username  = '';
let role  = '';
let token = ''
let responseGoole = '';
let selectType = null;
let user =localStorage.getItem('userStory');
let imageUrl = 'http://localhost:3000/image/ava.png';
if(user!=null){
    isAuthenticate = JSON.parse(user).isAuthenticate ? JSON.parse(user).isAuthenticate : '';
    username  = JSON.parse(user).isAuthenticate ? JSON.parse(user).username : '';
    role  = JSON.parse(user).isAuthenticate ? JSON.parse(user).role : '';
    token = JSON.parse(user).isAuthenticate ? JSON.parse(user).token : '';
    responseGoole = JSON.parse(user).isAuthenticate ? JSON.parse(user).responseGoole : '';
    imageUrl = JSON.parse(user).isAuthenticate ? JSON.parse(user).imageUrl : 'http://localhost:3000/image/ava.png';
    //selectType = JSON.parse(user).isAuthenticate ? JSON.parse(user).selectType : null;
}
let InitialState = { 
  
    isAuthenticate ,
    username,
    role,
    selectType,
    token,
    responseGoole,
    imageUrl
  
}

const allReducer = (state=InitialState,action)=>{
    switch(action.type){
        case  "IS_AUTHENTICATE" :
            localStorage.setItem('userStory',JSON.stringify({isAuthenticate:true,username :action.username,role:action.role,token:action.token,responseGoole:action.responseGoole,imageUrl : action.imageUrl}))
            return {...state,
                        isAuthenticate:true,
                        username :action.username,
                        role:action.role,
                        token:action.token,
                        responseGoole:action.responseGoole,
                        imageUrl : action.imageUrl
                    };
        case "IS_LOGOUT" :
            localStorage.setItem('userStory',JSON.stringify({isAuthenticate : false,username : '',role:'',token : '',responseGoole:'',imageUrl :'http://localhost:3000/image/ava.png'}))    
            return {...state,isAuthenticate : false,username : '',role:'',token : '',responseGoole:'',imageUrl :'http://localhost:3000/image/ava.png',selectType:null};
        case "SELECT_TYPE":
            return {...state,selectType:action.typeSelect}
        default : 
            return {...state};

    }
}

let store = redux.createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;