import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { MockEventsService } from '../../../../services/MockEventsService';
import Event from './Event';

describe('Event component', () => {

  it('should pass properties to the Event component', () => {
    const event = MockEventsService.getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;

    // console.log(JSON.stringify(event));
    // console.log(testRenderer.toJSON());

    expect(testInstance.props.event.title).toBe(MockEventsService.evTitle);
    expect(testInstance.props.event.description).toBe(MockEventsService.evDescription);
    expect(testInstance.props.event.imageUrl).toBe(MockEventsService.evImageUrl);
  });

  it('should render the Event title', () => {
    const event = MockEventsService.getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('h2').props.children).toBe(MockEventsService.evTitle);
  });

  it('should reference the Event image', () => {
    const event = MockEventsService.getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('img').props.src).toBe(MockEventsService.evImageUrl);
  });
});
