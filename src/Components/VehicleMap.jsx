import { db } from "../firebase/config";
import { useEffect } from "react";
import { useVehicle } from "../Context/vehicleProvider";
import { getDocs, collection } from 'firebase/firestore';

function VehicleMap() {
  const { vehicleState } = useVehicle();

  useEffect(()=>{

    const getUser =async () => {
      // const userCollection = collection(db, `/${vehicleState[0].id}-${vehicleState[0].registrationNumber}/location`)
      const userCollection = collection(db, vehicleState[0].id+"-"+vehicleState[0].registrationNumber)
      const data = await getDocs(userCollection);
      console.log(data);
      console.log(userCollection);
      console.log(`${vehicleState[0].id}-${vehicleState[0].registrationNumber}`);
      console.log(vehicleState);
    }

    const loadProductData=async()=>{
      try {
          const allproductsSnapshot=await getDocs(collection(db,`${vehicleState[0].registrationNumber}-${vehicleState[0].id}/location`)); 
          const products = allproductsSnapshot.docs.map((doc) => doc.data());
          console.log(products,"list of products");
          return products;
          } catch (e) {
            console.error("Error while loading a document: ", e);
          } 
  }

    vehicleState.length > 0 && getUser() 
    vehicleState.length > 0 && loadProductData()
    vehicleState.length > 0 && console.log(loadProductData())

  },[vehicleState])

  return (
    <></>
  )
}

export { VehicleMap };