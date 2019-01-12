<template>
    <div class="footer">
        <div>
            <div @click="checkAll">
                <input v-show="false" type="checkbox">
                <span :class="flag?'active':''"></span>
                全选
            </div>
            总计：<span class="price">129</span>
        </div>
        <button @click="balance">结算</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag:true
        }
    },
    methods: {
        checkAll(){
            this.flag = !this.flag;
        },
        balance(){
            this.$router.push({name:"goodBalance"});
        }
    },
}
</script>


<style lang="scss" scoped>
    .footer{
        position: fixed;
        bottom:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:.33rem;
        width:100%;
        height:.8rem;
        font-size:.28rem;
        color:#202020;
        div{
            div{
                display: inline-block;
                margin-right:.26rem;
                span{
                    display:inline-block;
                    width:.24rem;
                    height:.24rem;
                    background:#fff;
                    border:.06rem solid #FF7878;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                .active{
                    background:#FF7878;
                }
            }        
        }
        button{
            width:1.6rem;
            height: 100%;
            color:#fff;
            font-size:.28rem;
            background:#FF7878;
            border: none;
        }
    }
</style>