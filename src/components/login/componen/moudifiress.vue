<template>
	<div class="list_ln">
		<!--头部-->
		<div class="header_ln">
			<p>修改地址</p>
			<div @click="address_btn"><img src="../../../../static/img_ln/jiao.jpg"/></div>
		</div>
		<!--地址列表-->
		<div class="main_ln">
			<ul>
				<li>
					<p class="name">楚子峰<span class="tel">18809767654</span>
					<p class="site"><span class="def">【默认】</span>北京市昌平区天苑路</p>
				</li>
				<li>
					<p class="name">楚子峰<span class="tel">18809767654</span>
					<p class="site"><span class="def"></span>北京市昌平区天苑路</p>
				</li>

<li>
					<p class="name">楚子峰<span class="tel">18809767654</span>
					<p class="site"><span class="def"></span>北京市昌平区天苑路</p>
				</li>


			</ul>
			
		</div>
		<!--无地址-->
		<div class="footer_ln">
			<p><router-link to="/address">+增加地址</router-link></p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			address_btn(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss">
	.list_ln{
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
				line-height: 1.47rem;
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

		ul{
			width:100%;
			li{
					
				height:1.30rem;
				width:7.50rem;
				margin-left:0.50rem;
				font-size: 0.24rem;
				color:#202020;
				border-bottom: 0.01rem solid #e5e5e5;
					.name{
					font-size:0.27rem;
					margin-top:0.20rem;
					}	
					.tel{
						margin-left:2.75rem;
					}	
					.site{
						padding-top:0.40rem;
					}
					.def{
						color:#ff7878;
					}
					.site{
						margin-left:0.09rem;
					}
				}		
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