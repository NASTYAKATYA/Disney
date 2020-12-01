let items_parent2 = document.getElementById('post-wrapper'),
    requiredJson2 = character_array,
    count2 = requiredJson2.length;
function fillSlider()
{
	let i = 0;
	while(i<count2)
	{
		let k = 0;
		let parent2 = items_parent2,
			divEl1 = document.createElement('div');
			divEl1.classList = "mySlides fade cols col-12";
		while(k<5){
			divEl2 = document.createElement('div'),
			aEl3 = document.createElement('a'),
			imgEl4 = document.createElement('img');
		divEl2.classList = "cols col-2_4 post";
		aEl3.href="#"+requiredJson2[i].name;
		imgEl4.src = "img/" + requiredJson2[i].name + ".jpg";
		imgEl4.classList = "round";

		divEl2.append(aEl3);
		aEl3.append(imgEl4);
		divEl1.append(divEl2);
		k++;
		i++;
	}
	parent2.append(divEl1);
	}
}

fillSlider();