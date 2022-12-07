import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Checklist() {
    const [selectedContract, setSelectedContract] = useState()
    const contracts = [
        {
            name: "TBTA",
            id: 1,
            plazas: [
                "RFK - Manhattan", "BWB", "HHB", "CBB", "QMT", "HCT", "TNB", "VNB", "RFK - Bronx"
            ]
        }, 
        {
            name: "NYSBA",
            id: 2,
            plazas: [
                "RFK - Manhattan", "BWB", "HHB", "CBB", "QMT", "HCT", "TNB", "VNB", "RFK - Bronx"
            ]
        },
        {
            name: "TIBA",
            id: 3,
            plazas: [
                "RFK - Manhattan", "BWB", "HHB", "CBB", "QMT", "HCT", "TNB", "VNB", "RFK - Bronx"
            ]
        },
        {
            name: "DRJTBC",
            id: 4,
            plazas: [
                "RFK - Manhattan", "BWB", "HHB", "CBB", "QMT", "HCT", "TNB", "VNB", "RFK - Bronx"
            ]
        },
        {
            name: "PBA",
            id: 5,
            plazas: [
                "RFK - Manhattan", "BWB", "HHB", "CBB", "QMT", "HCT", "TNB", "VNB", "RFK - Bronx"
            ]
        }
    ]

    function handleCustomerSelect(e) {
        console.log(e.target.value)
        const contract = contracts.find(c => c.id === Number(e.target.value))
        console.log(contract)
        setSelectedContract(contract)
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formCustomerSelect">
        <Form.Label>Customer</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => handleCustomerSelect(e)}>
            <option>Select One</option>
            {contracts.map(contract => {
                return (
                    <option key={contract.id} value={contract.id}>{contract.name}</option>
                )
            })}
        </Form.Select>
      </Form.Group>

            // Figure out why I am not getting the plaza names to show
      <Form.Group className="mb-3" controlId="formCustomerSelect">
        <Form.Label>Plaza</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>Select One</option>
            {selectedContract ? selectedContract.plazas.map(plaza => {
                return (
                    <option key={plaza.name} value={plaza.name}>{plaza.name}</option>
                )
            }) : null}
        </Form.Select>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Checklist;