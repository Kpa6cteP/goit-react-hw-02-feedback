import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleCounter = (type) => this.setState((prevState) => ({ [type]: prevState[type] + 1 }));

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleCounter} />
        </Section>
        <Section title="Statistics">
          {total > 0 ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback} />
            : <Notification message="No feedback given" />}
        </Section >
      </div>
    );
  }
}

export default App;

