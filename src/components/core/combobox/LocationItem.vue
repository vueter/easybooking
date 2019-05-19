<template>
	<div class="location-item active">
		<v-layout row>
			<v-flex>
				<div class="location-city">{{city}}</div>
				<div class="location-country">{{country}}</div>
			</v-flex>
			<v-flex>
				<div class="location-iata-code">{{code}}</div>
			</v-flex>
		</v-layout>
	</div>
</template>
<script>
export default {
	name: 'LocationItem',
	props: {
		city: String,
		country: String,
		code: String
	}
}
</script>

<style>
.location-item{
	width: 100%;
	padding: 7px;
	padding-left: 20px;
	padding-right: 15px;
	cursor: pointer;
	height: 59px;
	border-left: 2px solid #FFFFFF;
}
.location-item:hover{
	border-left: 2px solid #0BD5F5;
	background-color: #EDFDFF;
}
.location-item .location-city{
	width: 100%;
	text-align: left;
	font-size: 14px;
	margin-top: 5px;
	color: #4A4A4A;
}
.location-item .location-country{
	width: 100%;
	text-align: left;
	font-size: 12px;
	color: #777777;
	line-height: 18px;
}
.location-item .location-iata-code{
	width: 100%;
	text-align: right;
	font-size: 14px;
	line-height: 16px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	color: #777777;
	padding-top: 15px;
}
</style>
