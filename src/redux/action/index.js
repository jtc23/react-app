
export const type= {
	SWITCH_MENU : "SWITCH_MENU",
	BREAD_CRUMB:"BREAD_CRUMB",
	DELETE_BREAD_CRUMB:"DELETE_BREAD_CRUMB",
	CHANGE_LOGIN:"CHANGE_LOGIN"

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