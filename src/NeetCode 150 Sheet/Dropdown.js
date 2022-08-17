import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "./Dropdown.css";

const Dropdown = () => {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const apiUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=2q3rvNx7SIu2CbCTWaQyadyaEGPvtqVADjZgI8KjVlNivoql8D6Cdh9ETSmuLf86-1ADPlefJwxcnh4tR7sMNiKQJpHl-ZoUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBtpBVPs_oiMsc2LVQ22ZYFk9QYWg7tZjGLu4-pGpCkm8GvXVOhei8F0nhYq2WIXo1ANoT05ASYFY-2DFnJTIVyPr1zNuXnCBQ&lib=M_TDJuMet8CPFqFJiXtaSYNiR4gTsQqJ6`;
    const getBlindData = async () => {
      try {
        const res = await axios.get(apiUrl);
        setQuestions(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlindData();
  }, []);

  useEffect(() => {
    let temp = [];
    questions.map((q, i) => {
      temp.push(q.topics);
      return temp;
    });
    setTopics([...new Set(temp)]);
  }, [questions]);

  return (
    <div className="dropdown_container">
      {topics.length > 0 ? (
        topics.map((q, i) => {
          return (
            <div
              className="dropdown"
            // style={{ marginLeft: "4%", marginRight: "4%", marginTop: "2%" }}
            >
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h4>
                      <strong>{topics[i]}</strong>
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    {questions
                      .filter(
                        (question) =>
                          question.topics === topics[i] &&
                          question.level === "Easy"
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
                                        style={{
                                          width: "25px",
                                          height: "25px",
                                        }}
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
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.level}]</h5>
                                </div>
                              </div>
                            </li>
                          </ul>
                        );
                      })}
                    {questions
                      .filter(
                        (question) =>
                          question.topics === topics[i] &&
                          question.level === "Medium"
                      )
                      .map((q, ind) => {
                        return (
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <div className="d-flex">
                                <Form>
                                  <div key="checkbox" className="mb-3 mx-4  ">
                                    <Form.Check type="checkbox" id="">
                                      <Form.Check.Input
                                        type="checkbox"
                                        isValid
                                        style={{
                                          width: "25px",
                                          height: "25px",
                                        }}
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
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.level}]</h5>
                                </div>
                              </div>
                            </li>
                          </ul>
                        );
                      })}
                    {questions
                      .filter(
                        (question) =>
                          question.topics === topics[i] &&
                          question.level === "Hard"
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
                                        style={{
                                          width: "25px",
                                          height: "25px",
                                        }}
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
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.level}]</h5>
                                </div>
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

export default Dropdown;
