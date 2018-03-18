import React, { Component } from 'react';

import Greetings from '../Greetings/greetings';
import TrainingMetamorphosis from '../Training/training';
import Team from '../Team/team';
import Carousel from '..//Carousel/carousel';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Greetings />
        <TrainingMetamorphosis />
        <Team />
      </div>
    );
  }
}