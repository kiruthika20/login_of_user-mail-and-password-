import * as actionTypes from './actionTypes';
import Promise from 'es6-promise';


export const setLoginPending = (islogingPending) => {
    return {
      type: actionTypes.LOGIN_PENDING,
          islogingPending
    }
  };

  export const setLoginSuccess= (islogingSuccess) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      islogingSuccess
    }
  };
  export const setLoginError= (LoginError) => {
    return {
      type: actionTypes.LOGIN_ERROR,
      LoginError
     
    }
  };


  export function login(email,password){
      return dispatch=>{
          dispatch(setLoginPending(true));
          dispatch(setLoginSuccess(false));
          dispatch(setLoginError(null));

          sendLoginRequest(email,password).then(success=>{
              dispatch(setLoginPending(false));
              dispatch(setLoginSuccess(true));

          })
          .catch(err=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err));

          });
      }
  }
function sendLoginRequest(email,password){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(email==="krithika@gmail.com" && password ==='1234'){
          return  resolve(true);
        }else{
          return reject(new Error('Invalid email or password'));
        }
      },1000);
    });
}