"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Container, Row, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';


export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [singleUserData, setSingleUserData] = useState({})
  const [editId, setEditId] = useState(null)

  const handleShow = (Id) => {
    setEditId(Id)
    setShow(true)
    

   
      axios.get(`https://form-backend-by-py.onrender.com/api/website/user/single-user/${Id}`)
        .then((ress) => {
          setSingleUserData(ress.data.data)
        })
    
  };
  console.log(editId)


  let [storeData, setStoreData] = useState([])

  let displayData = () => {
    axios.get("https://form-backend-by-py.onrender.com/api/website/user/getuser")
      .then((ress) => {
        setStoreData(ress.data.data)
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }


  let userForm = (e) => {
    e.preventDefault()

    axios.post("https://form-backend-by-py.onrender.com/api/website/user/register", e.target)
      .then((ress) => {
        toast.success(ress.data.message)
        displayData()
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  // singleDelete
  let singleDelete = (Did) => {
    axios.delete(`https://form-backend-by-py.onrender.com/api/website/user/single-user-delete/${Did}`)
      .then((ress) => {
        toast.success(ress.data.message)
        displayData()
      })
      .catch((error) => {
        toast.error(error.message)
      })

  }

  // seletedInput
  let [inputsStore, setInputsStore] = useState([])

  let seletedInput = (e) => {

    let { value, checked } = e.target

    // console.log(e.target.value)
    // console.log(e.target.checked)
    // console.log(value,checked)

    if (checked == true) {
      setInputsStore([...inputsStore, value])
    }
    else {
      let newArr = inputsStore.filter((v) => {
        return v != value
      })

      setInputsStore(newArr)
    }


  }


  let allDelete = () => {
    axios.post("https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete", inputsStore)
      .then((ress) => {
        toast.success(ress.data.message)
        displayData()
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  //  allCheckeds
  let allCheckeds = (e) => {
    // console.log(storeData)
    let getIds = storeData.map((v) => {
      return v._id
    })
    if (e.target.checked == true) {
      setInputsStore(getIds)
    }
    else {
      setInputsStore([])
    }


  }

  // updateWork
  let updateWork = (e) => {
    e.preventDefault()

    let editObj = {
      name: e.target.name.value,
      email: e.target.email.value
    }
    axios.put(`https://form-backend-by-py.onrender.com/api/website/user/update-user/${editId}`, editObj)
      .then((ress) => {
        toast.success(ress.data.message)
        setShow(false)
        displayData()
      })
  }


  useEffect(() => {
    displayData()
  }, [])
  return (
    <>
      <ToastContainer />
      <Container className="shadow-lg p-4 ">
        <h1 className="text-center  mt-4" > User Application Form </h1>

        <Form onSubmit={userForm} >
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Email" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Contact</Form.Label>
            <Form.Control type="text" name="contact" placeholder="Enter contact" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Gender</Form.Label>
            <div className="d-flex gap-3 ">
              <Form.Check type="radio" name="gender" value={"male"} />  Male
              <Form.Check type="radio" name="gender" value={"female"} />  Female
            </div>

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="profilePicture" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} name="address" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>DOB</Form.Label>

            <input type="date" name="dob" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Qualification</Form.Label>
            <div className="d-flex gap-3 ">
              <Form.Check type="checkbox" name="qualification" value={"10"} />  10
              <Form.Check type="checkbox" name="qualification" value={"12"} />  12
              <Form.Check type="checkbox" name="qualification" value={"UG"} />  UG
              <Form.Check type="checkbox" name="qualification" value={"PG"} />  PG
            </div>

          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </Container>


      {/* tabel */}
      <Container fluid className="py-5 px-5  " >
        <Table striped>
          <thead>
            <tr>
              <th> <input type="checkbox" onChange={(e) => allCheckeds(e)} /> </th>
              <th>First Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Image</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Qualification</th>
              <th>Action</th>
              <th> <Button variant="info" onClick={allDelete} > Seleted  Delete </Button> </th>
            </tr>
          </thead>
          <tbody>

            {storeData.length > 0 ?
              storeData.map((v, i) => {
                return (
                  <>
                    <tr>
                      <td><input type="checkbox" value={v._id} checked={inputsStore.includes(v._id)} onChange={(e) => seletedInput(e)} /></td>
                      <td> {v.name} </td>
                      <td>{v.email}</td>
                      <td>{v.contact}</td>
                      <td>{v.gender}</td>
                      <td>  <img src={`https://form-backend-by-py.onrender.com/uploads/${v.profilePicture}`} width={100} height={100} />  </td>
                      <td>{v.address}</td>
                      <td>{v.dob}</td>
                      <td> {v.qualification} </td>
                      <td><Button variant="success" onClick={() => handleShow(v._id)}> Edit </Button></td>
                      <td> <Button variant="danger" onClick={() => singleDelete(v._id)} > Delete </Button> </td>
                    </tr>
                  </>
                )
              })
              :
              "No Data Found"
            }

          </tbody>
        </Table>
      </Container>


      {/* model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Application Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={updateWork} >
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" defaultValue={singleUserData.name} placeholder="Enter Name" />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" defaultValue={singleUserData.email} placeholder="Enter Email" />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" name="contact" defaultValue={singleUserData.contact} placeholder="Enter contact" />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Gender</Form.Label>
              <div className="d-flex gap-3 ">
                <Form.Check type="radio" name="gender" value={"male"} defaultChecked={singleUserData.gender} />  Male
                <Form.Check type="radio" name="gender" value={"female"} defaultChecked={singleUserData.gender} />  Female
              </div>

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Image</Form.Label>
              <img className="border border-5" src={`https://form-backend-by-py.onrender.com/uploads/${singleUserData.profilePicture}`} width={100} height={100} />
              <Form.Control type="file" name="profilePicture" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="address" defaultValue={singleUserData.address} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>DOB</Form.Label>

              <input type="date" name="dob" defaultValue={singleUserData.dob} />

            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Qualification</Form.Label>
              <div className="d-flex gap-3 ">
                <Form.Check type="checkbox" name="qualification" value={"10"} defaultValue={singleUserData.qualification} />  10
                <Form.Check type="checkbox" name="qualification" value={"12"} defaultValue={singleUserData.qualification} />  12
                <Form.Check type="checkbox" name="qualification" value={"UG"} defaultValue={singleUserData.qualification} />  UG
                <Form.Check type="checkbox" name="qualification" value={"PG"} defaultValue={singleUserData.qualification} />  PG
              </div>

            </Form.Group>


            <Button variant="primary" type="submit" >
              Update
            </Button>
          </Form>
        </Modal.Body>

      </Modal>

    </>
  );
}
