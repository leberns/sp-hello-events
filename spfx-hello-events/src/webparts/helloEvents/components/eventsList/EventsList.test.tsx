import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { MockEventsService } from '../../../../services/events/MockEventsService';
import EventsList from './EventsList';

describe('EventsList', () => {

  it('should receive the children Event components as properties', () => {
    const events = (new MockEventsService()).getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const instance = testRenderer.root;

    const quantity = instance.props.events.items.length;

    expect(quantity).toBe(events.items.length);
  });

  it('should have children components of Event', () => {
    const events = (new MockEventsService()).getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const testInstance = testRenderer.root;

    const eventInstances = testInstance.findAllByProps({className: "event"});

    expect(eventInstances.length).toEqual(events.items.length);
  });

  it('should have children components', () => {
    const events = (new MockEventsService()).getEvents();
    const testRenderer = TestRenderer.create(<EventsList events={events} />);
    const testInstance = testRenderer.root;

    const eventsList = testInstance.find(el => el.children.length === events.items.length);

    expect(eventsList).toBeDefined();
  });
});
