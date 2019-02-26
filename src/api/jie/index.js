const Mock=require("mockjs");
let data = Mock.mock({
    "success":true,
    "data": [{
        'picture': "static/hrj_img/img-wzsc-3.png",
        'title': "打疫苗，最可怕的是不懂这些问题！",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-2.png",
        'title': "猫咪打喷嚏的原因，原来是这样啊！",
        'num': "3443",
      },
      {
        'picture': "static/hrj_img/img-wzsc-3.png",
        'title': "猫咪年龄的6种估测方式",
        'num': "1123",
      },
      {
        'picture': "static/hrj_img/img-wzsc-4.png",
        'title': "打疫苗，最可怕的是不懂这些问题！",
        'num': "2223",
      },
      {
        'picture': "static/hrj_img/img-wzsc-7.png",
        'title': "让猫咪变得更可爱，你可以这样做！",
        'num': "3413",
      },
      {
        'picture': "static/hrj_img/img-wzsc-6.png",
        'title': "猫咪年龄的6种估测方式",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-7.png",
        'title': "猫咪打喷嚏的原因，原来是这样啊！",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-6.png",
        'title': "撸猫心得，你家的猫咪也这么可爱吗？",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-3.png",
        'title': "猫咪年龄的6种估测方式",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-4.png",
        'title': "打疫苗，最可怕的是不懂这些问题！",
        'num': "8843",
      },
      {
        'picture': "static/hrj_img/img-wzsc-7.png",
        'title': "猫咪打喷嚏的原因，原来是这样啊！",
        'num': "8843",
      },
    ]
})

const Article =(config)=>{
    return data;
}
export default {Article}