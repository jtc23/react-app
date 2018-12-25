const dafaultState ={
	bread:[{
		title:'首页',
        key: '/home'
	},{	
        title: '表单',
        key: '/form',
	}
	]
}

function deletecrumb (key,arr){
	return	arr.filter((element)=>{
			return element.key!=key
		})
}

export default (state = dafaultState,action) =>{
	const new_arr=state.bread;
	switch (action.type){

		case type.DELETE_BREAD_CRUMB:
		return {
			...state,
			bread: deletecrumb(action.key,new_arr)
		}
		break;
		default:
		return state;
		break;
	}

	return state;
}