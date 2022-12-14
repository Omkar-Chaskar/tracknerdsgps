import { Stack,InputGroup,Form} from "react-bootstrap";
import { useFilter } from "../Context/filterProvider";
import { useVehicle } from "../Context/vehicleProvider";

function VehicleList() {
  const { filterDispatch, vehicleList : filteredVehicles } = useFilter();
  const { vehicleState } = useVehicle();

  const searchChangeHandler = (e) => {
    const { value } = e.target;
    filterDispatch({ type: "SEARCH", payload: value.toLowerCase() })
  };

  return (
    <div className="container">
      <div className="my-4">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter registration number"
            aria-label="Search Bar"
            aria-describedby="basic-addon1"
            onChange={(e)=>searchChangeHandler(e)}
          />
        </InputGroup>
      </div>
      <div>
        <Stack gap={1}>
        {(filteredVehicles.length>0?filteredVehicles:vehicleState).map(({registrationNumber, id})=>{
                return(
                  <div className="bg-light border p-3" key={id}>{registrationNumber}</div>
                );
            })
          }
        </Stack>
      </div>
    </div>
  );
}

export { VehicleList };
