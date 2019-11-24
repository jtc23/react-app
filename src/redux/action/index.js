import { textdata } from '@/axios'
export const type= {
	SWITCH_MENU : "SWITCH_MENU",
	BREAD_CRUMB:"BREAD_CRUMB",
	DELETE_BREAD_CRUMB:"DELETE_BREAD_CRUMB",
	CHANGE_LOGIN:"CHANGE_LOGIN",
	GET_LISTDATA:'GET_LISTDATA'
}

export const swithMenu =(menuName)=>({
	type:type.SWITCH_MENU,
	menuName
})

export const breadCrumb=(breadCrumb)=>({

	type:type.BREAD_CRUMB,
	breadCrumb

})

export const deletecrumb=(key)=>({

	type:type.DELETE_BREAD_CRUMB,
	key

})

export const changelogin=(login)=>({

	type:type.CHANGE_LOGIN,
	login

})
export const geilist=(data)=>({

	type:type.GET_LISTDATA,
	data

})
export const getTestData=()=>{
 return (dispatch) => {
 	textdata().then(res=>{
 		const data=res.list;
 		const action= geilist(data);
 		dispatch(action);
 	})
 }

}