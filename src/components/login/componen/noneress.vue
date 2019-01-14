<template>
	<div class="noneress_ln">
		<!--头部地址管理-->
		<div class="header_ln">
			<p>地址管理</p>
			<img src="../../../../static/img_ln/jiao.jpg"/>
		</div>
		
		
		<!--地址列表-->
		<div class="main_ln">
			
			<img src="../../../../static/img_ln/none.jpg"/>
			<ul>
				<li>
					
					
				</li>
			</ul>	
		</div>	
		
		<!--添加地址-->
		<div class="footer_ln">
			
			<p><router-link to="/address">+增加新地址</router-link></p>
			
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	
/*头部地址管理*/	
	.noneress_ln{
		width:100%;
		height:100%;
		position:relative;
		.header_ln{
			width:100%;
			height:1.27rem;
			background:#fddd62;
			
			p{
				font-size: 0.36rem;
				text-align: center;
				line-height: 1.50rem;
			}
			
			img{
				width:0.19rem;
				height:0.31rem;
				position: absolute;
				top:0.67rem;
				left:0.20rem;	
			}
			
		}
/*地址列表*/	
	.main_ln{
		
		position:fixed;
		top:1.27rem;
		left:0;
		bottom:0;
		right: 0;
		margin: auto;
		overflow: auto;
	
		img{
			width:2.93rem;
			height:4.10rem;
			margin-top:2.30rem;
			margin-left:2.30rem;
		}
	}
	
	
/*增加地址*/	
	.footer_ln{
		width:100%;
		height:1.27rem;
		background:#fddd62;
		position:fixed;
		left:0;bottom: 0;
			p{
				font-size: 0.36rem;
				text-align:center;
				line-height: 1.27rem;
				
			}
		}
		
	}
</style>