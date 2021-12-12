import Pizza from "./models/PizzaModel.js";
import Pizzas from "./constant/Product.js";

const ImportData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Errror:", error.meesage);
  }
};

export default ImportData;
