import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import axios from "axios";
import './Dropdown.css'
import Spinner from "react-bootstrap/Spinner";


const Dropdown = () => {
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState([]);
    useEffect(() => {
      const apiUrl = `https://script.googleusercontent.com/macros/echo?user_content_key=xExn-nLo15NEENvQKmFVBgpl766xZzGeTxuV19PztOAQPTmefdawW9NB1aWfDWTQG4ehUaD8f91L7EmfnVTV2KqQd4GYlFmxm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKYYn7CpmJJ48zi5UvtYkhKHLHJg7ixd6ppE2qXAI5oJDj4udImYTOgJKJ9OUpBJiiPUHgSk3IETGeibKWoq38a201CTyqb6Og&lib=MeH2CFNbkyYjSDjY_INfX_NiR4gTsQqJ6`;
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
        temp.push(q.topics);
        return temp;
      });
      setTopics([...new Set(temp)]);
    }, [questions]);
  
    return (
        <div className="dropdown_container">
        {topics.length > 0 ? (
          topics.map((t, i) => {
            return (
              <div className="dropdown" key={i} >
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
                        (question) => question.topics === t
                      ).map((q, ind) => {
                          return (
                            <ul key={ind} className="list-group list-group-flush">
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
                                    href={q.question_link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <h5>
                                      <strong>{q.question}</strong>
                                    </h5>
                                  </a>
                                  <div style={{ marginLeft: "1%" }}>
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
  

  
//   .filter(
//     (question) =>
//       question.topics === topics[i] &&
//       question.Level === "Easy"
//   )