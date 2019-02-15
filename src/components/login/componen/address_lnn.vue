<template>
	<div class="address_ln">
		<!--头部地址管理-->
		<div class="header_ln">
			<p class="add_p">{{eimge}}</p><p class="add_save" @click="handleAdd">保存</p>
			
			<div @click="address_btn2"><img src="../../../../static/img_ln/jiao.jpg"/></div>
		</div>		
		<!--地址列表-->
		<div class="main_ln">
		<ul>
			<!-- <li><input type="text" placeholder="收货人姓名" class="cood"></li>
			<li><input type="number" placeholder="手机号码" class="cood"></li>
			<li><input type="number" placeholder="邮编（选填）" class="cood"></li>
			<li><input type="text" placeholder="省/市/行政区" class="cood"></li>
			<li><input type="text" placeholder="详细地址" class="cood"></li>
			<li>
			<input type="radio" class="odd_a">
			<input type="text" placeholder="设为默认地址" class="cood"></li> -->
				<li v-for="item in list_ln">
						<input :type="item.type"
							:placeholder="item.plac"/>
								
				</li>
		</ul>	
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				eimge:"编辑地址",
				list_ln:[
					{typel:"text",plac:"收货人姓名"},
					{typel:"number",plac:"18837287657"},
					{typel:"namber",plac:"编码"},
					{typel:"text",plac:"省/市/行政区"},
					{typel:"text",plac:"详细地址"}
				]
			}
		},
		methods:{
			address_btn2(){
				this.$router.go(-1);
			},
			handleAdd(){
				this.$router.push("/moudifiress");
			}
		}
	}
</script>

<style lang="scss" scoped>
	
/*头部地址管理*/	
	.address_ln{
		width:100%;
		height:100%;
		position:relative;
		.header_ln{
			width:100%;
			height:1.1rem;
			background:#fddd62;
			position:fixed;
			top:0;
			left:0;
			p{
				
				font-size: 0.36rem;
				text-align:center;
				line-height: 1.1rem;
				display: inline-block;
			}
			.add_p{
				padding-left: 40%;
			}
/*头部  返回角*/			
			img{
				width:0.19rem;
				height:0.32rem;
				position: absolute;
				top:0.42rem;
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
						input{
							width:100%;
							height:0.88rem;
							border:none;
							outline: none;
							font-size:0.24rem;
							padding-left:0.34rem;
							}
						.odd_a{
							width:0.22rem;
							height: 0.22rem;
						}
						
				}
			}	
	}
	
/*增加地址*/	
	
	}
</style>