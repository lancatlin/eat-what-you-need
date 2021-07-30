<script>
	import { writable } from 'svelte/store';
	const nutrientsTable = {
		gain: {
			calories: 1.1,
			protein: 0.25,
			carbohydrates: 0.55,
			fat: 0.2,
		},
		reduce: {
			calories: 0.75,
			protein: 0.4,
			carbohydrates: 0.4,
			fat: 0.2,
		},
		maintain: {
			calories: 1,
			protein: 0.3,
			carbohydrates: 0.45,
			fat: 0.25,
		},
	}
	function carry(number, digits) {
		return Math.ceil(number / digits) * digits
	}
	const weight = writable(Number(localStorage.getItem('weight')));
	weight.subscribe(value => { localStorage.setItem('weight', value) });
	let height = writable(Number(localStorage.getItem('height')));
	height.subscribe(value => localStorage.setItem('height', value));
	let age = writable(Number(localStorage.getItem('age')));
	age.subscribe(value => localStorage.setItem('age', value));
	let sex_bias = writable(Number(localStorage.getItem('sex_bias')));
	sex_bias.subscribe(value => localStorage.setItem('sex_bias', value));
	if (!$sex_bias) {
		$sex_bias = 5; 	//male
	}

	let activity = writable(Number(localStorage.getItem('activity')));
	activity.subscribe(value => localStorage.setItem('activity', value));
	if (!$activity) {
		$activity = 1.15;
	}
	let target = writable(localStorage.getItem('target'));
	target.subscribe(value => localStorage.setItem('target', value));
	if (!$target) {
		$target = "maintain";
	}


	$: console.log($weight, $height, $age, $sex_bias, $activity, $target);
	$: bmr = $weight * 10 + $height * 6.25 - $age * 5 + $sex_bias;
	$: tdee = bmr * $activity;
    $: nutrients = nutrientsTable[$target];
    $: calories = tdee * nutrients.calories;
    $: protein = calories * nutrients.protein / 4 ;
    $: carbohydrates = calories * nutrients.carbohydrates / 4;
    $: fat = calories * nutrients.fat / 9 ;
</script>

<div class="main" >
<h1>每日熱量及飲食建議</h1>
<div>
	<label>體重[kg]：
		<input type=number bind:value={$weight} min=3 max=200 step=0.1>
	</label>
	<label>年齡[歲]：
		<input type=number bind:value={$age} min=0 max=200 step=1>
	</label>
	<label>身高[cm]：
		<input type=number bind:value={$height} min=0 max=300 step=1>
	</label>
	<label>生理性別：
		<select bind:value={$sex_bias}>
			<option value={5}>男</option>
			<option value={-161}>女</option>
		</select>
	</label>
	<label>每週活動量：
		<select bind:value={$activity}>
			<option value={1.15}>運動 0-1 小時</option>
			<option value={1.3}>運動 1-3 小時</option>
			<option value={1.475}>運動 4-6 小時</option>
			<option value={1.7}>運動 7-9 小時</option>
			<option value={1.9}>運動 10+ 小時</option>
		</select>
	</label>
	<label>訓練目標：
		<select bind:value={$target}>
			<option value="gain">增肌</option>
			<option value="reduce">減脂</option>
			<option value="maintain">維持</option>
		</select>
	</label>
</div>
<br>
<div>
	<h2>計算結果</h2>
	<p>BMR 基礎代謝率[大卡]：{carry(bmr, 10)}</p>
	<p>TDEE 每日總消耗熱量[大卡]：{carry(tdee, 10)}</p>
	<p>目標熱量[大卡]：{carry(calories, 10)}</p>

	<h3>每日三大營養素建議</h3>
	<p>蛋白質[g]：{carry(protein, 1)}</p>
	<p>碳水化合物[g]：{carry(carbohydrates, 1)}</p>
	<p>脂肪[g]：{carry(fat, 1)}</p>
	<p><strong>強烈建議搭配阻力訓練以達最佳效果</strong></p>
</div>
<div>
	<h2>關於</h2>
	<p>本程式由 wancat 開發，原始碼位於 <a href="https://github.com/lancatlin/eat-what-you-need" target="_blank">GitHub</a></p>
	<h3>對你有幫助嗎？拍手鼓勵我！</h3>
	<iframe title="LikeCoin" class="LikeCoin" height="235" src="https://button.like.co/in/embed/wancatserver/button?referrer=https://lancatlin.github.io/eat-what-you-need/" width="100%" frameborder=0></iframe>
</div>
</div>

<style>
	.main {
		max-width: 350px;
		margin: auto;
	}
</style>