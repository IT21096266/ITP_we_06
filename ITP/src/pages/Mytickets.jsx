import React, { useEffect, useState, ReactDOM } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TicketDataService from "../services/ticket.services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Grid, GridColumn as Column } from "@PROGRESS/kendo-react-grid";

const Mytickets = ({}) => {
  const [ticket, setTicket] = useState([]);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [filterTable, setTablefilter] = useState([]);
  const [value, setValue] = useState("");
  const pdfExportComponent = React.useRef(null);

  const navigate = useNavigate(); // Navigate

  useEffect(() => {
    getTicket();
  }, []);

  const getTicket = async () => {
    const data = await TicketDataService.getAllTicket();
    console.log(data.docs);
    setTicket(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const exportPDFWithMethod = () => {
    let element = document.querySelector("#table") || document.body;
    savePDF(element, {
      paperSize: "A4",
    });
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  // navigate to /contacts
  const navigateTicketForm = () => {
    navigate("/TicketForm");
  };

  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = ticket.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTablefilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setTicket([...ticket]);
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Mytickets">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={value}
                  onChange={filterData}
                />
              </div>

              <section
                id="Mytickets"
                className={`flex md:flex-row flex-col ${styles.paddingY}`}
              >
                <div
                  className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-discount-gradient rounded-md`}
                >
                  <div class="overflow-x-auto relative">
                    <table className={`${styles.ALtable}`}>
                      <thead className={`${styles.ALthread}`}>
                        <tr>
                          <th scope="col" className={`${styles.ALth}`}>
                            <button
                              className={`${styles.ALbtn} font-semibold`}
                              onClick={navigateTicketForm}
                            >
                              Add New Ticket
                            </button>

                            <button
                              className={`${styles.ALbtn} font-semibold`}
                              onClick={exportPDFWithComponent}
                            >
                              Export to PDF with component
                            </button>
                            <button
                              className={`${styles.ALbtn} font-semibold`}
                              onClick={exportPDFWithMethod}
                            >
                              Export to PDF with method
                            </button>
                          </th>

                          <th scope="col" className={`${styles.ALth}`}></th>
                          <th scope="col" className={`${styles.ALth}`}></th>
                          <th scope="col" className={`${styles.ALth}`}></th>
                        </tr>
                      </thead>
                      <PDFExport
                        ref={pdfExportComponent}
                        paperSize="auto"
                        margin={40}
                        fileName={`Report for ${new Date().getFullYear()}`}
                        author="KendoReact Team"
                      >
                        <tbody>
                          {value.length > 0
                            ? filterTable.map((doc, index) => {
                                return (
                                  <tr key={doc.id}>
                                    <td className={`${styles.ALtd}`}>
                                      {" "}
                                      <a href="/Adminticket">{index + 1}</a>
                                    </td>
                                    <td className={`${styles.ALtd}`}>
                                      {doc.subject}
                                    </td>
                                    <td className={`${styles.ALtd}`}>
                                      {doc.issueDate}
                                    </td>
                                  </tr>
                                );
                              })
                            : ticket.map((doc, index) => {
                                return (
                                  <tr key={doc.id}>
                                    <td className={`${styles.ALtd}`}>
                                      {" "}
                                      <a href="/Adminticket">{index + 1}</a>
                                    </td>
                                    <td className={`${styles.ALtd}`}>
                                      {doc.subject}
                                    </td>
                                    <td className={`${styles.ALtd}`}>
                                      {doc.issueDate}
                                    </td>
                                  </tr>
                                );
                              })}
                        </tbody>
                      </PDFExport>
                    </table>
                  </div>
                </div>
              </section>
            </Helmet>
             
          </div>
                   {" "}
        </div>
             {" "}
      </main>
         {" "}
    </div>
  );
};
export default Mytickets;
