/**
 * Класс, представляющий предмет инвентаря
 */
class Item {
    /**
     * @param {string} name - название предмета
     * @param {number} weight - вес предмета
     * @param {string} rarity - редкость (common, uncommon, rare, legendary)
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /**
     * Возвращает информацию о предмете
     * @returns {string}
     */
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }

    /**
     * Изменяет вес предмета
     * @param {number} newWeight
     */
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

/**
 * Класс оружия, наследуется от Item
 */
class Weapon extends Item {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     * @param {number} damage - урон
     * @param {number} durability - прочность (0-100)
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использовать оружие (уменьшает прочность)
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
        }
    }

    /**
     * Починить оружие
     */
    repair() {
        this.durability = 100;
    }

    /**
     * Переопределение метода getInfo
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
}

/**
 * Тестирование класса Item
 * @type {Item}
 */
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

sword.setWeight(4.0);
console.log(sword.getInfo());

/**
 * Тестирование класса Weapon
 * @type {Weapon}
 */
const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());

bow.use();
console.log("Durability after use:", bow.durability);

bow.repair();
console.log("After repair:", bow.durability);

/**
 * Функция-конструктор Item
 * @constructor
 * @param {string} name - название предмета
 * @param {number} weight - вес
 * @param {string} rarity - редкость
 */
function ItemFunc(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

/**
 * Метод получения информации
 */
ItemFunc.prototype.getInfo = function () {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

/**
 * Устанавливает новый вес
 * @this {ItemFunc}
 * @param {number} newWeight - новый вес
 * @returns {void}
 */
ItemFunc.prototype.setWeight = function (newWeight) {
    this.weight = newWeight;
};

/**
 * Функция-конструктор Weapon
 * @constructor
 * @param {string} name - название
 * @param {number} weight - вес
 * @param {string} rarity - редкость
 * @param {number} damage - урон
 * @param {number} durability - прочность
 */
function WeaponFunc(name, weight, rarity, damage, durability) {
    ItemFunc.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
}

// Наследование
WeaponFunc.prototype = Object.create(ItemFunc.prototype);
WeaponFunc.prototype.constructor = WeaponFunc;

/**
 * Использование оружия
 */
WeaponFunc.prototype.use = function () {
    if (this.durability > 0) {
        this.durability -= 10;
    }
};

/**
 * Ремонт
 */
WeaponFunc.prototype.repair = function () {
    this.durability = 100;
};

/**
 * Создание объекта для демонстрации опциональной цепочки
 * @type {Item}
 */
const item = new Item("Steel Sword", 3.5, "rare");

/**
 * Безопасный доступ к свойству name с помощью опциональной цепочки
 * @description Если объект будет null или undefined, ошибки не произойдёт
 */
console.log(item?.name);
