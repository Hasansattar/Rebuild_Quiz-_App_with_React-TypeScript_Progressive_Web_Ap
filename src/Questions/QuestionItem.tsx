import React from 'react'
import { Row, Col, Radio } from "antd";
import { Quiz } from '../models/Quiz';
import { useAppDispatch } from "../slices/store";
import { addAnswer } from "../slices/gameSlice";
import { RadioChangeEvent } from "antd/lib/radio";

interface Props {
    quizItem: Quiz;
    isAnswered:boolean;
    setIsAnswered:React.Dispatch<React.SetStateAction<boolean>>;
    
}

const QuestionItem: React.FC<Props>=
({ quizItem ,isAnswered,setIsAnswered}) => {
   
   
      const dispatch = useAppDispatch();
      const checkAnswer = (e: RadioChangeEvent) => {
        if (e.target.value === quizItem.correctAnswer) {
          dispatch(
            addAnswer({
              answer: e.target.value,
              isCorrect: true,
              correctAnswer: quizItem.correctAnswer,
              question: quizItem.question,
            })
          );
        } else {
          dispatch(
            addAnswer({
              answer: e.target.value,
              isCorrect: false,
              correctAnswer: quizItem.correctAnswer,
              question: quizItem.question,
            })
          );
        }
        setIsAnswered(true);
      };
   
   
   
    return (
        <>
            <Row justify="center" style={{ marginTop: "1rem" }} >
                <Col>

                    <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
                        <span style={{ fontWeight: "bold" }}>Question: </span>
                        <span
              dangerouslySetInnerHTML={{ __html: quizItem?.question }}
            ></span>
                    </p>
                </Col>

            </Row>

            <Row justify="center" style={{ marginTop: "1rem" }}>
                <Col>
                    <Radio.Group
                         onChange={checkAnswer}
                        buttonStyle="outline"
                        optionType="button"
                        style={{ textAlign: "center" }}
                    >
                        {quizItem?.choices.map((choice)=>(
                        
                            <Radio.Button disabled={isAnswered}  value={choice} key={choice} style={{border:"2px solid skyblue", margin:"5px"}} >
                              
                              <span dangerouslySetInnerHTML={{ __html: choice }}></span>
                            </Radio.Button>
                            )
                        )}

                    </Radio.Group>
                </Col>
            </Row>
        </>
    )
}

export default QuestionItem
