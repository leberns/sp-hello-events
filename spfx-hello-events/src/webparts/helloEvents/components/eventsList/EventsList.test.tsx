import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { MockEventsService } from '../../../../services/MockEventsService';
import EventsList from './EventsList';

it('should set a tree with Event components', () => {

  const events = MockEventsService.getEvents();
  const testRenderer = TestRenderer.create(<EventsList events={events} />);
  const testInstance = testRenderer.root;
  expect(testInstance.props.children.count).toBe(events.items.length);
});
