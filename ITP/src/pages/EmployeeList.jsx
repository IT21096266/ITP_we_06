import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import EmployeeDataService from "../services/employee.services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const EmployeeList = ({ getEmployeeID }) => {
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate(); // Navigate

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    const data = await EmployeeDataService.getAllEmployee();
    console.log(data.docs);
    setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const deleteHandler = async (id) => {
    await EmployeeDataService.deleteEmployee(id);
    getEmployee();
  };

  // navigate to /contacts
  const navigateEmployee = () => {
    navigate("/employee");
  };
  const navigateEmployeeSalary = () => {
    navigate("/employeeSalary");
  };

  const navigateEmployeeReport = () => {
    navigate("/employeeReport");
  };

  return (
    <div class="overflow-x-auto relative">
      <div class="flex justify-center ...">
        <button className={`${styles.ALbtn}`} onClick={navigateEmployee}>
          Add New Employee
        </button>
      </div>
      <br></br>
      <div class="flex justify-center ...">
        <button className={`${styles.ALbtn}`} onClick={navigateEmployeeSalary}>
          Salary Calculator
        </button>
      </div>

      <div class="whitespace-pre-wrap ..."> </div>
      <table className={`${styles.ALtable}`}>
        <thead className={`${styles.ALthread}`}>
          <tr>
            <th scope="col" className={`${styles.ALth}`}>
              ID
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              {" "}
              First NAME
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              LAST NAME
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              CITY
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              Position
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              Salary
            </th>
            <th scope="col" className={`${styles.ALth}`}>
              MOBILE Number
            </th>
          </tr>
        </thead>
        <tbody>
          {employee.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td className={`${styles.ALtd}`}>{index + 1}</td>
                <td className={`${styles.ALtd}`}>{doc.firstName}</td>
                <td className={`${styles.ALtd}`}>{doc.lastName}</td>
                <td className={`${styles.ALtd}`}>{doc.cityName}</td>
                <td className={`${styles.ALtd}`}>{doc.position}</td>
                <td className={`${styles.ALtd}`}>{doc.salary}</td>
                <td className={`${styles.ALtd}`}>{doc.mNumber}</td>
                <td>
                  <button className={`${styles.ALbtn}`}>
                    <Link to={`employeeUpdate/${doc.id}`}>Edit</Link>
                  </button>
                </td>
                <td>
                  <button
                    className={`${styles.ALbtn}`}
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div></div>
      <div class="flex justify-center ...">
    <button className={`${styles.ALbtn}`} onClick={navigateEmployeeReport}>
      Employee Report
    </button>
  </div>
    </div>
    
  );
};

export default EmployeeList;
