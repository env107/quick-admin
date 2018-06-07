export default {
    navTheme:'dark',
    active:"0-1", //当前活动项目
    collapse:[0], //打开折叠层
    mode:"vertical", //vertical 垂直 //horizontal
    nav:[
        {
            title:"订单管理",
            iron:"ios-navigate",
            url:"",
            child:[
                {
                    title:"商品订单管理",
                    url:"/info"
                },
                {
                    title:"智能售货机购买订单",
                    url:"/"
                },
                {
                    title:"会员充值订单",
                    url:"/info"
                }
            ]
        }, 
        {
            title:"会员管理",
            iron:"ios-navigate",
            url:"",
            child:[
                {
                    title:"会员列表",
                    url:"/datalist"
                },
                {
                    title:"增加会员",
                    url:"/"
                },
            ]
        },
        {
            title:"碎片管理",
            iron:"ios-navigate",
            url:"/datalist",

        }, 
    ],
    breadPath:[0,2],
    breadText:[]

}