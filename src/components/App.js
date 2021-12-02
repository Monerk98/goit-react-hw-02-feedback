import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOption/FeetbackOption.jsx";
import Statistics from "./Static/Static.jsx";
import Section from "./Section/Section";
import Notification from './Notification/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickButton = (nameBtn) => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  render() {
    const total = this.countTotalFeedback()
    const { good, bad, neutral } = this.state;
    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickButton}
        />
      </Section>
      <Section title="Statictics">
      {total === 0 ? (
        <Notification message="There is no feedback"/>) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
         )}
      </Section>
      </div>
    );
  }
}
