import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Dropdown = () => {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const apiUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=ibUQs9oThZTg-rku_hVGV-Z1p6sq0bCFCxGNppc43WhCWzJ1XtVUW1KVN9C_P8Ipb-NY6awZidD-SFbcV-cnqxyqkOtiHEpSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDuGPEvX1K5VjQaFW0GNwiNipTVDeKgRUdqnfElKnPT9mbxdjCNpu7p4I_rV0ShCjo3hyOYDEwM0peTuP1Nb09aKmw2BazI66Q&lib=M7_9_wM_cJmPVaLPQrqCSbGf7zQye5QxY`;
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
      temp.push(q.Topic);
      return temp;
    });
    setTopics([...new Set(temp)]);
  }, [questions]);

  return (
    <>
      {topics.length > 0 ? (
        topics.map((q, i) => {
          return (
            <div
              className="dropdown"
              style={{ marginLeft: "4%", marginRight: "4%", marginTop: "2%" }}
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
                          question.Topic === topics[i] &&
                          question.Level === "Easy"
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
                                  href={q.Link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <h5>
                                    <strong>{q.Question}</strong>
                                  </h5>
                                </a>
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.Level}]</h5>
                                </div>
                              </div>
                            </li>
                          </ul>
                        );
                      })}

                    {questions
                      .filter(
                        (question) =>
                          question.Topic === topics[i] &&
                          question.Level === "Medium"
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
                                      />
                                    </Form.Check>
                                  </div>
                                </Form>
                                <a
                                  href={q.Link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <h5>
                                    <strong>{q.Question}</strong>
                                  </h5>
                                </a>
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.Level}]</h5>
                                </div>
                              </div>
                            </li>
                          </ul>
                        );
                      })}

                    {questions
                      .filter(
                        (question) =>
                          question.Topic === topics[i] &&
                          question.Level === "Hard"
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
                                      />
                                    </Form.Check>
                                  </div>
                                </Form>
                                <a
                                  href={q.Link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <h5>
                                    <strong>{q.Question}</strong>
                                  </h5>
                                </a>
                                <div style={{ marginLeft: "1%" }}>
                                  <h5>[{q.Level}]</h5>
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
    </>
  );
};

export default Dropdown;
