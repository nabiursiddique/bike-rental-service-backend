import { TBike } from './bike.interface';
import { Bike } from './bike.model';

//* create bike into db
const createBikeIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};

//* get all bike from db
const getAllBikesFromDB = async () => {
  const result = await Bike.find();
  return result;
};

//* update bike into db
const updateBikeIntoDB = async (id: string, updateData: object) => {
  const result = await Bike.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

//* delete bike from db
const deleteBikeFromDB = async (id: string) => {
  const result = await Bike.findByIdAndUpdate(
    id,
    { isAvailable: false },
    { new: true },
  );
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
};
