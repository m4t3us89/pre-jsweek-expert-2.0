//Os segredos da Sintaxe Javascript - Pré
/*const EntityBase = require('./entityBase')

console.log(new EntityBase({
    name: 'Allisson mateus',
    gender: 'male',
}))

console.log(new EntityBase({
    name: 'Xuxa da Silva',
    gender: 'female',
}).name)*/

const assert = require('assert')
const Employee = require('./employee')
const Manager = require('./manager')
const Util = require('./util')


const GENDER = {
    male: 'male',
    female : 'female'
}

{
    const employee = new Employee({
        name: 'XuxaDaSilva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birtYear, { message: 'you must define age first !!!'})
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Allisson',
        gender: GENDER.male,
        age: 20
    })

    assert.deepStrictEqual(employee.name , 'Mr. Allisson')
    assert.deepStrictEqual(employee.age , undefined)
    assert.deepStrictEqual(employee.gender , undefined)
    assert.deepStrictEqual(employee.grossPay , Util.formartCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay , Util.formartCurrency(4000.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birtYear, expectedBirthYear)

    // não tem set, não vai mudar !!
    employee.birtYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birtYear, expectedBirthYear)

    // tem set, vai mudar !!
    employee.age = 80
    assert.deepStrictEqual(employee.birtYear , 1941)

    console.log('\n ----employeee--------')

}

{
    const manager = new Manager({
        name: 'Mariazinha',
        age: 18,
        gender: GENDER.female
    })

    assert.deepStrictEqual(manager.name , 'Ms. Mariazinha')
    assert.deepStrictEqual(manager.age , undefined)
    assert.deepStrictEqual(manager.gender , undefined)
    assert.deepStrictEqual(manager.birtYear , 2003)
    assert.deepStrictEqual(manager.grossPay , Util.formartCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses , Util.formartCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formartCurrency(6000.32))

    console.log('\n ----manager--------')

}