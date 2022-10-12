const dotenv = require("dotenv");
const shops = require("./data/shops.js");
const equipments = require("./data/equipments.js");
const Equipment = require("./models/equipmentModel.js");
const Shop = require("./models/shopModel.js");

const { connectDB } = require("./config/db.js");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Equipment.deleteMany();
    await Shop.deleteMany();

    const createdShops = await Shop.insertMany(shops);

    const sampleShop = createdShops[0]._id;
    const sampleEquipments = equipments.map((equip) => {
      return { ...equip, shop: sampleShop };
    });

    await Equipment.insertMany(sampleEquipments);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Equipment.deleteMany();
    await Shop.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
