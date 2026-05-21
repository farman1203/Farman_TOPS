import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Manage_user = () => {

  useEffect(() => {
    fetchdata();
  });

  const [data, setData] = useState([])

  const fetchdata = async () => {
    const obj = await axios.get(`http://localhost:3001/user`);
    setData(obj.data)
  }

  const deletehandle = async (id) => {
    const obj = await axios.delete(`http://localhost:3001/user/${id}`)
    fetchdata();
    alert('deleted')
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Email</th>
            <th>action</th>

          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr>
                <td>{value.Name}</td>
                <td>{value.email}</td>
                <td className='text-center'>
                  <button className='btn btn-danger me-2' onClick={() => deletehandle(value.id)}>Delete</button>
                  <button className='btn btn-primary'>Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default Manage_user
