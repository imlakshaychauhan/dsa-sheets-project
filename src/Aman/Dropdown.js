import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import './Dropdown.css'
import Spinner from "react-bootstrap/Spinner";
const apiUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=3-KHSBB19XRCJotxmNY7hJ6ETvoBUAnLOs5FYN7QVaQDbL1UmitvpuNIOpBLdpLjALnCYZ7IaMG-goc1qrcg5Q3jWRz3rQIWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAmXNCDwW6PWTakllw2nK7ni-pwlXPMrS6xTgp_17YiFzDCOg7xABHkBm62Dbgs2VU3yCKhrpUIZCz3MV81bW3n0lpdaUW7DWNz9Jw9Md8uu&lib=M7tRxDEp2ik4dWxsPI51wShgApuHg6-Ro`;

const Dropdown = () => {
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState([]);
    useEffect(() => {
   
      const getBlindData = async () => {
        try {
          const res = await axios.get(apiUrl);
          setQuestions(res.data.data);
        //   console.log(res.data.data);
        } catch (err) {
          console.log(err);
        }
      };
      getBlindData();
    }, []);
  
    useEffect(() => {
      let temp = [];
      questions.map((q, i) => {
        temp.push(q.topic);
        return temp;
      });
      setTopics([...new Set(temp)]);
    }, [questions]);
  
    return (
      <div className="dropdown_container">
        {topics.length > 0 ? (
          topics.map((q, i) => {
            return (
              <div className="dropdown" style={{ marginLeft: "4%", marginRight: "4%", marginTop: "2%" }}>
                <Accordion className="accordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header >
                      <h4>
                        <strong>{topics[i]}</strong>
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      {questions
                        .filter(
                          (question) =>
                            question.topic === topics[i] 
                        )
                        .map((q, ind) => {
                          return (
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <div className="d-flex">
                                  <Form>
                                    <div key="checkbox" className="mb-3 mx-4">
                                      <Form.Check type="checkbox" id="">
                                        <Form.Check.Input
                                          type="checkbox"
                                          isValid
                                        />
                                      </Form.Check>
                                    </div>
                                  </Form>
                                  <a
                                    href={q.question_links}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <h5>
                                      <strong>{q.question}</strong>
                                    </h5>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          );
                        })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
  };

export default Dropdown