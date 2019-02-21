const Mock=require("mockjs");
let data = Mock.mock({
    "success":true,
    "data": [{
        'picture': "/static/hrj_img/img-bbsc-1.png",
        'name': "日本多漫风格  猫用  水晶艺术食盒",
        'intro': "双层底盒 炫彩可爱 经久耐用",
        'price': " 67"
      },
      {
        'picture': "/static/hrj_img/img-bbsc-2.png",
        'name': "贵为卡通超萌防滑垫--粉猪",
        'intro': "可爱猫窝 毛绒 可水洗 保暖",
        'price': "267"
      },
      {
        'picture': "/static/hrj_img/img-bbsc-3.png",
        'name': "比利时欧弟皇家猫粮",
        'intro': "原装进口 天然原生 调节食欲",
        'price': "132"
      },
      {
        'picture': "/static/hrj_img/img-bbsc-5.png",
        'name': "易宝娜好口味 猫粮 蟹肉味",
        'intro': "易吸收 好美味 流质零食",
        'price': "28"
      },
      {
        'picture': "/static/hrj_img/img-bbsc-6.png",
        'name': "冠能全价猫粮205g",
        'intro': "优孤立肾 增加免疫力",
        'price': "165"
      },
      {
        'picture': "/static/hrj_img/img-bbsc-7.png",
        'name': "西式小金汤",
        'intro': "口感鲜美 营养美味 维持健康",
        'price': "18"
      },
    ]
})

const Collect =(config)=>{
    return data;
}
export default {Collect}