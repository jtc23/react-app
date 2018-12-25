const menuList = [
    {
        title:'首页',
        key: '/app/home',
        icon:'home'
    },
    {
        title:'UI',
        key: '/app/ui',
        icon:'build',
        children: [
            {
                title: '按钮',
                key: 'app/ui/buttons',
            },
            {
                title: '弹框',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
            }
        ]
    },
    // {
    //     title: '表单',
    //     key: '/form',
    //     icon:'edit',
    //     children: [
    //         {
    //             title: '登录',
    //             key: '/form/login',
    //         },
    //         {
    //             title: '注册',
    //             key: '/form/reg',
    //         }
    //     ]
    // },
    {
        title: '表格',
        key: '/app/table',
        icon:'form',
        children: [
            {
                title: '动态表格',
                key: '/app/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/app/rich',
        icon:'edit'
    },
    {
        title: '城市地图',
        key: '/app/city',
        icon:'qq'
    },
    {
        title: '订单管理',
        key: '/order',
        icon:'edit',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/app/user',
        icon:'reconciliation'
    },
    {
        title: '车辆地图',
        key: '/app/bikeMap',
        icon:'edit',
    },
    {
        title: 'antd图表',
        key: '/app/charts',
        icon:'form',
        children: [
            {
                title: '柱形图',
                key: '/app/charts/bar'
            },
            {
                title: '饼图',
                key: '/app/charts/pie'
            },
            {
                title: '折线图',
                key: '/app/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/app/permission',
        icon:'safety'
    },
];
export default menuList;