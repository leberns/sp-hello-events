import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { MockEventsService } from '../../../../services/MockEventsService';
import Event from './Event';

it('should pass properties to the Event component', () => {

  const event = MockEventsService.getEventByIndex(0);
  const testRenderer = TestRenderer.create(<Event event={event} />);
  const testInstance = testRenderer.root;
  expect(testInstance.props.event.title).toBe(MockEventsService.evTitle);
  expect(testInstance.props.event.description).toBe(MockEventsService.evDescription);
  expect(testInstance.props.event.imageUrl).toBe(MockEventsService.evImageUrl);
});

it('should set the Event component tree', () => {

  const event = MockEventsService.getEventByIndex(0);
  const testRenderer = TestRenderer.create(<Event event={event} />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType('h2').props.children).toBe(MockEventsService.evTitle);
});
