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
			<li><input type="text" placeholder="收货人姓名" class="cood"></li>
			<li><input type="number" placeholder="手机号码" class="cood"></li>
			<li><input type="number" placeholder="邮编（选填）" class="cood"></li>
			<li><input type="text" placeholder="省/市/行政区" class="cood"></li>
			<li><input type="text" placeholder="详细地址" class="cood"></li>
			<li><input type="text" placeholder="默认地址" class="cood"></li>
			<li><input type="text" placeholder="收货人姓名" class="cood"></li>
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
				li{
					width:100%;
					height:0.89rem;
					border-bottom: 0.01rem solid #ccc;
						.cood{
							width:100%;
							height:0.88rem;
							border:none;
							font-size:0.24rem;
							padding-left:0.34rem;
					}
				}
			}	
	}
	
	
/*增加地址*/	
	
	}
</style>