import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { MockEventsService } from '../../../../services/MockEventsService';
import EventsList from './EventsList';

describe('EventsList', () => {

  it('should receive the children Event components as properties', () => {
    const events = MockEventsService.getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const testInstance = testRenderer.root;
    expect(testInstance.props.events.items.length).toBe(events.items.length);
  });

  it('should have Event children components', () => {
    const events = MockEventsService.getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const testInstance = testRenderer.root;
    const eventComponents = testInstance.findAllByProps({className: "event"});
    expect(eventComponents.length).toEqual(events.items.length);
  });

  it('the component should have children components', () => {
    const events = MockEventsService.getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const testInstance = testRenderer.root;
    const eventsList = testInstance.find(el => el.children.length === events.items.length);
    expect(eventsList).toBeTruthy();
  });
});
