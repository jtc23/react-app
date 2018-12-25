const menuList = {
    menus:[
    {
        title:'首页',
        key: '/app/home',
        icon:'home',
        component: 'Home'
    },
    {
        title: '表格',
        key: '/app/table',
        icon:'form',
        children: [
            {
                title: '动态表格',
                key: '/app/table/high',
                component: 'Table'
            }
        ]
    },
    {
        title: '富文本',
        key: '/app/rich',
        icon:'edit',
        component: 'Text'
    },
    {
        title: '城市地图',
        key: '/app/city',
        icon:'qq',
        component: 'Maps'
    },
    {
        title: '员工管理',
        key: '/app/user',
        icon:'reconciliation',
        component: 'User'
    },
    {
        title: 'antd图表',
        key: '/app/charts',
        icon:'form',
        children: [
            {
                title: '柱形图',
                key: '/app/charts/bar',
                 component: 'Bar'
            },
            {
                title: '饼图',
                key: '/app/charts/pie',
                 component: 'Pie'
            },
            {
                title: '折线图',
                key: '/app/charts/line',
                 component: 'Line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/app/permission',
        icon:'safety',
        component: 'Permission'
    },
],
others: []
};
export default menuList;