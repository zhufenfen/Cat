<template>
	<div class="address_ln">
		<!--头部地址管理-->
		<div class="header_ln">
			<p>编辑地址</p><p class="add_save">保存</p>
			
			<div @click="address_btn2"><img src="../../../../static/img_ln/jiao.jpg"/></div>
		</div>		
		<!--地址列表-->
		<div class="main_ln">
			<ul>
				<li>收货人姓名</li>
				<li>手机号</li>
				<li>省/市/行政区</li>
				<li>详细地址</li>
				<li class="list_li"><input type="radio" name="">设为默认地址</li>
			</ul>
			
		</div>	
	</div>
</template>

<script>
	export default{
		methods:{
			address_btn2(){
				this.$router.go(-1);
			}
		}
		
	}
</script>

<style lang="scss">
	
/*头部地址管理*/	
	.address_ln{
		width:100%;
		height:100%;
		position:relative;
		.header_ln{
			width:100%;
			height:1.27rem;
			background:#fddd62;
			position:fixed;
			top:0;
			left:0;
			
			p{
				font-size: 0.36rem;
				text-align: center;
				line-height: 1.47rem;
				// display: inline-block;
			}
/*头部  返回角*/			
			img{
				width:0.19rem;
				height:0.32rem;
				position: absolute;
				top:0.67rem;
				left:0.20rem;
				
			}
		
/*头部  保存*/
		.add_save{
			font-size:0.24rem;
			position: absolute;
			top:0;
			left:6.05rem;
			
			//display: inline-block;	
			}	
		}
/*地址列表*/	
	.main_ln{
		position:fixed;
		top:1.27rem;
		left:0;
		bottom:0;
		right: 0;
		overflow: auto;

		ul{
			width:100%;
			
			li{
				height:0.88rem;
				line-height:0.88rem;
				font-size: 0.24rem;
				color:#8f8f8f;
				padding-left:0.18rem;
				border-bottom: 0.01rem solid #cccccc;
				input{
					width:0.22rem;
					height:0.22rem;
					margin-left:0.07rem;
					}
				li:last-child{
					border: onoe;	
				}	
			}
			
			
		}


	}
	
	
/*增加地址*/	
	
	}
</style>