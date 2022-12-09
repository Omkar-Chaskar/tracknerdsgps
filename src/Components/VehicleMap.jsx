import startFirebase from "../firebase/config";
import { useEffect } from "react";
import { useVehicle } from "../Context/vehicleProvider";
import { getDocs, collection } from 'firebase/firestore';

function VehicleMap() {
  const { vehicleState } = useVehicle();

  const db = startFirebase();

  useEffect(()=>{

    const getUser =async () => {
      // const userCollection = collection(db, `/${vehicleState[0].id}/${vehicleState[0].registrationNumber}/location`)
      const userCollection = collection(db,`${vehicleState[0].id}-${vehicleState[0].registrationNumber}`)
      const data = await getDocs(userCollection);
      console.log(data);
    }

    vehicleState.length > 0 && getUser()
  },[db,vehicleState])

  return (
    <></>
  )
}

export { VehicleMap };