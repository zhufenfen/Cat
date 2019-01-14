<template>
	<div class="sign_ln">
		<!--注册-->
		<div class="welcom_ln">
			<p class="p_ln">欢迎加入喵圈！</p>
			
		</div>
		<!--手机-->
		<div class="uname_ln">
			<input type="number"  placeholder="请输入手机号" class="tex1_ln"/>
			<input type="number"  placeholder="请输入验证码" class="tex2_ln"/>
			<div class="ver_ln">获取验证码</div>
		</div>
		<!--注册-->
		<div class="dl_ln" @click="signgohome()">
			注册
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			signgohome(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style lang="scss">
	
/*注册*/ 
	.sign_ln{
		width:100%;
		height:100%;
		.welcom_ln{
			.p_ln{
				margin-top: 2.56rem;
				margin-left: 2.50rem;
				font-size:0.36rem;	
			}	
		}
/*用户名手机号*/		
	.uname_ln{
	/*手机号*/	
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
			
	/*注册*/		
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