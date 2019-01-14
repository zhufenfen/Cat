<template>
    <div id="main">
        <div class="complete">
            <div>
                <img src="static/imgs/goodBalance/wancheng.png">
            </div>
            交易完成
        </div>
        <div class="message">

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    #main{
        margin-top:1.1rem;
        .complete{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: .2rem;
            height:3.15rem;
            font-size:.36rem;
            color:#202020;
            background:#fff;
            div{
                margin-bottom: .38rem;
                img{
                    width:1.5rem;
                    height:1.5rem;
                }
            }
        }
        .message{
            height:9rem;
            background:#fff;
        }
    }
    
</style>