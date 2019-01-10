<template>
	<div class="login_ln">

		<!--logo-->
		<div class="log_ln">
			<img src="../../../static/img_ln/login.jpg"/>
		</div>
		<div class="dengl ">
			<p class="oder">快捷登陆</p>
			<p class="news"><router-link to="/sign">新用户注册</router-link></p>
			
		</div>
		
		<!--账号-->
		<div class="uname_ln">
			<input type="number"  placeholder="请输入手机号" class="tex1_ln"/>
			<input type="number"  placeholder="请输入验证码" class="tex2_ln"/>
			<div class="ver_ln">获取验证码</div>
		</div>
		<!--登陆-->
		<div class="dl_ln">
			登陆
		</div>
	</div>
	
</template>



<script>
	export default{

	}


</script>



<style lang="scss">
/*主页面*/	
	.login_ln{   
		width: 100%;
		height: 100%;
		
/*图片*/		
	.log_ln{
			
			img{
				width:2.04rem;
				height:2.04rem;
				margin-top:1.59rem ;
				margin-left:2.69rem;
			
		}
	}
		
/*登陆注册按钮*/		
	.dengl{
		margin-top:1.12rem;
		margin-left:2.3rem;
			.oder{
				
					font-size: 0.3rem;
					color:#202020;
					display: inline-block;
					border-bottom: 0.02rem solid #000;
				
				}
			.news{
				font-size: 0.3rem;
				color:#ccc;
				display: inline-block;
				margin-left:0.36rem;
			}		
		}
			
/*input 用户名*/			
	.uname_ln{
	/*用户名*/	
			.tex1_ln{
				width:4.54rem;
				height:0.48rem;
				font-size: 0.24rem;
				color: #a5a5a5;
				margin-top:0.58rem;
				margin-left:1.64rem;
				border:none;
				border-bottom: 0.01rem solid #000;
				}
	/*验证码*/			
			.tex2_ln{
				width:2.60rem;
				height:0.46rem;
				font-size: 0.24rem;
				color: #a5a5a5;
				margin-top:0.85rem;
				margin-left:1.64rem;
				border:none;
				display: inline-block;
				border-bottom: 0.01rem solid #000;
				}
	/*获取验证码*/			
			.ver_ln{
				width:1.80rem;
				height:0.6rem;
				font-size: 0.24rem;
				text-align:center;
				line-height: 0.6rem;
				background:#fddd62;
				border-radius: 0.15rem;
				display: inline-block;
				
				}	
				
			}
	/*登陆*/		
			.dl_ln{
				width:4.53rem;
				height:0.6rem;
				font-size: 0.24rem;
				text-align:center;
				line-height: 0.6rem;
				background:#fddd62;
				border-radius: 0.15rem;
				margin-top:0.9rem;
				margin-left:1.64rem;
			}
		
}
</style>