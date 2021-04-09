import * as actionTypes from '../action/actionTypes';


export default function reducer (state = {islogingPending:false,
islogingSuccess:false,
isLogingError:null}, action) {
    switch (action.type){
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        islogingSuccess:action.islogingSuccess
    };
    
      case actionTypes.LOGIN_PENDING:
      return {
        ...state,
      islogingPending:action.islogingPending 
    };
    
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        LoginError:action.LoginError
        
    };
    
      default:
            return state;
    }
  };