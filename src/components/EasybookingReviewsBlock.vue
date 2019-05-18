<template>
	<v-container>
		<h2 class="reviews-head-text">Собираетесь купить авиабилеты? Рекомендуем изучить эту информацию!</h2>
		<v-layout row wrap>
			<v-flex md6 xs12 pa-3>
				<h3 class="reviews-subtext">Последние отзывы</h3>
				<EasybookingReviewsCard />
				<EasybookingReviewsCard />
				<v-btn block color="#0ED3F2" class="loadmore-reviwes-btn">Посмотреть все отзывы</v-btn>
			</v-flex>
			<v-flex md6 xs12 pa-3>
				<h3 class="reviews-subtext">Советы</h3>
				<EasybookingReviewsCard />
				<EasybookingReviewsCard />
				<v-btn block color="#0ED3F2" class="loadmore-reviwes-btn">Посмотреть все отзывы</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import EasybookingReviewsCard from '@/components/cards/EasybookingReviewsCard'

export default {
	name: 'EasybookingReviewBlock',
	components: { EasybookingReviewsCard }
}
</script>
<style>
.reviews-head-text{
	margin-top: 50px;
	margin-bottom: 30px;
}
.reviews-subtext{
	text-align: left;
}
.loadmore-reviwes-btn{
	color: white !important;
	margin-top: 20px;
}
.first-reviews-card{
	padding-right: 10px;
}
</style>
