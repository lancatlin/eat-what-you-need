function getValue(key) {
    return document.getElementById(key).value
}

function getNumber(key) {
    return Number(getValue(key))
}

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

function output(result){
    for (key in result) {
        document.getElementById(key).value = Math.ceil(result[key])
    }
}

function carry(number, digits) {
    return Math.ceil(number / digits) * digits
}

function calculate() {
    const weight = getNumber('weight')
    const height = getNumber('height')
    const age = getNumber('age')
    const sex_bias = getNumber('sex')

    const bmr = weight * 10 + height * 6.25 - age * 5 + sex_bias

    const activity = getNumber('activity')
    const tdee = bmr * activity

    const nutrients = nutrientsTable[getValue('target')]
    const calories = tdee * nutrients.calories
    const protein = tdee * nutrients.protein / 4 
    const carbohydrates = tdee * nutrients.carbohydrates / 4
    const fat = tdee * nutrients.fat / 9 
    output({bmr: carry(bmr, 10), tdee: carry(tdee, 10), calories, protein, carbohydrates, fat})
}