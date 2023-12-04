const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "User"},
})

const List = sequelize.define("list", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

const ListThing = sequelize.define("list_thing", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

const Thing = sequelize.define("thing", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    quantity: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define("type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define("brand", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ThingInfo = sequelize.define("thing_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define("type_brand",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(List)
List.belongsTo(User)

List.hasMany(ListThing)
ListThing.belongsTo(List)

Type.hasMany(Thing)
Thing.belongsTo(Type)

Brand.hasMany(Thing)
Thing.belongsTo(Brand)

Thing.hasMany(ListThing)
ListThing.belongsTo(Thing)

Thing.hasMany(ThingInfo)
ThingInfo.belongsTo(Thing)

Type.belongsToMany(Brand , {through: TypeBrand})
Brand.belongsToMany(Type , {through: TypeBrand})

module.exports = {
    User,
    List,
    ListThing,
    Thing,
    Type,
    Brand,
    ThingInfo,
}

