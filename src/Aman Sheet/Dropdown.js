import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Dropdown = () => {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const apiUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=yuT-qPiN761U-56Gy8alTvA5OK5Lf5YBKxjFqJtRvFDh_FpHNGP6NiIfHcmfFUCH_AeLx5Z35gy1g2R0NIQyeZce7uKQjP17m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDmPKAlQzulLXmQ41OvqJW8iPivKbemNw2PWSvZgxr-0PxTaR7ut_bGXFARhOtAZeLoCahbDh-L1X4Fu2OFdicYqtS4cMo4motz9Jw9Md8uu&lib=MssN-boRNrBKb0u279sIVaxgApuHg6-Ro`;
    const getBlindData = async () => {
      try {
        const res = await axios.get(apiUrl);
        setQuestions(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlindData();

    // --> local storage part starts here
    let data = JSON.parse(localStorage.getItem("aman_progress"));
    if (!data) {
      const arr1 = new Array(376).fill(false);
      localStorage.setItem("aman_progress", JSON.stringify(arr1));
    } else setProgress(data);
  }, []);

  useEffect(() => {
    let temp = [];
    questions.map((q, i) => {
      temp.push(q.topic);
      return temp;
    });
    setTopics([...new Set(temp)]);
  }, [questions]);

  const handleCheck = (id) => {
    let data = JSON.parse(localStorage.getItem("aman_progress"));
    if (data[id] === false) data[id] = true;
    else data[id] = false;
    localStorage.setItem("aman_progress", JSON.stringify(data));
    setProgress(data);
  };

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
                      .filter((question) => question.topic === topics[i])
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
                                        checked={progress[q.id] === true}
                                        onChange={() => handleCheck(q.id)}
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
