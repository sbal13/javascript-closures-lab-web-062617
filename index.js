function bumpCounter(){
	let counter = 0

	function addBump(){
		counter ++
	}

	function getBumps(){
		return counter
	}

	return {addBump, getBumps}
}



function createAnimal(animalType){
	function deadlyDevice(device){
		return {animalType: animalType, deadlyDevice: device}
	}

	return deadlyDevice
}

var sharkCreator = createAnimal("Shark")

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

var sharkWithFrickinCannon = sharkCreator("Cannon")

