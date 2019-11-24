import React from 'react'
import { type } from '@/redux/action'
import { admin } from '@/axios'
const loginstate=JSON.parse(localStorage.getItem('user'));

const dafaultState ={
	menuName: '首页',
	bread:[{
		title:'首页',
        key: '/app/home'
	},{	
        title: '表单',
        key: '/app/form',
	}
	],
	loginstate:false,
	listdata:''
}


function deleteSameClass (arr){
	let obj={};
	arr = arr.reduce(function(item, next) {
       obj[next.key] ? '' : obj[next.key] = true && item.push(next);
      return item;
   }, []);
	return arr;
}

function deletecrumb (key,arr){
	return	arr.filter((element)=>{
			return element.key!=key
		})
}
 function changelogin(user){
 	console.log(admin());
 	admin().then( res =>{
 		console.log(res)
 		if(res.data.username==user.userName&&res.data.password==user.password){
 			 localStorage.setItem('user',JSON.stringify({...user,id:res.data.id}));
 			 sessionStorage.setItem("isLogin",JSON.stringify('1'));
 			return 1;
 		}else{
 			return 0;
 		}
 	}).catch(err=>{console.log(err)});
 }

export default (state = dafaultState,action) =>{
	const new_arr=state.bread;
	switch (action.type){
		case type.SWITCH_MENU:
			return {
				...state,
				menuName:action.menuName
			}
		break;

		case type.BREAD_CRUMB:
		new_arr.push(action.breadCrumb);
			 return {
			 	...state,
			 	bread:deleteSameClass(new_arr)
			 }
		break;

		case type.DELETE_BREAD_CRUMB:
		return {
			...state,
			bread: deletecrumb(action.key,new_arr)
		}
		break;
		case type.GET_LISTDATA:
		return {
			...state,
			listdata: action.data
		}
		break;
		case type.CHANGE_LOGIN:
		return {
			...state,
			loginstate: changelogin(action.login)>0?true:true
		}
		default:
		return state;
		break;
	}

	return state;
}