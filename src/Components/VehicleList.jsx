import { Stack,Form,Button } from "react-bootstrap";

function VehicleList() {
  return (
    <div className="container">
      <div className="my-4">
        <Form>
          <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter vehicle registration number"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <div>
        <Stack gap={1}>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
            <div className="bg-light border p-3">211035</div>
        </Stack>
      </div>
    </div>
  );
}

export { VehicleList };
