import React, { useEffect } from "react";
import { useAppDispatch, RootState } from "../slices/store";
import { fetchCategories, Difficulty } from "../slices/quizSlice";
import { useSelector } from "react-redux";
import { TriviaCategory } from "../models/TriviaCategory";
import { QuizForm } from "../QuizForm/index";
import Questions from "../Questions";
 

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const triviaCategories = useSelector<RootState, TriviaCategory[]>(
    (state) => state?.quiz?.quizCategories ?? []
  );
  const currentDifficulty = useSelector<RootState, Difficulty | string>(
    (state) => state.quiz.difficulty
  );

  const currentCategory = useSelector<RootState, number>(
    (state) => state?.quiz?.currentCategory ?? 0
  );

  

 useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]); 

  const isGameStarted = useSelector<RootState, boolean>(
    (state) => state.game.started
  );

  return (
    <div>
        {!isGameStarted && (
        <QuizForm
          triviaCategories={triviaCategories}
          currentDifficulty={currentDifficulty}
          currentCategory={currentCategory}
        />
        )}

      <Questions/>
    </div>
  );
};

export default HomePage;
