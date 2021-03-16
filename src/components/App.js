import React, { Component } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from "./statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleCounter = (type) => this.setState((prevState) => ({
    [type]: prevState[type] + 1
  }));

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleCounter}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positivePercentage} />
            : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}

export default App;

