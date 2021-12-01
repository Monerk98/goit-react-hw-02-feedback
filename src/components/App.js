// import React, { Component } from "react";
// import FeedBackOption from "./FeedbackOption/FeetbackOption";
// import Static from "./Static/Static";
// import Section from "./Section/Section.jsx";

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, stat) => {
//       acc += stat;
//       return acc;
//     }, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   handleClickButton = (nameBtn) => {
//     this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
//   };
//   render() {
//     const { good, bad, neutral } = this.state;
//     return (
//       <Section title="Please leave your feedback">
//         <FeedBackOption
//           option={Object.keys(this.state)}
//           leaveFeedback={this.handleClickButton}
//         />
//         <Static
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </Section>
//     );
//   }
// }

import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOption/FeetbackOption.jsx";
import Statistics from "./Static/Static.jsx";
import Section from "./Section/Section";

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
    const { good, bad, neutral } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickButton}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
