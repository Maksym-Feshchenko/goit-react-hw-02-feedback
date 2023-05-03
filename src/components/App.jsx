import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const handleGoodFeedback = () => {
    setGood(prevGood => prevGood + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        onGood={handleGoodFeedback}
        onNeutral={handleNeutralFeedback}
        onBad={handleBadFeedback}
      />
      <h2>Statistics</h2>
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};