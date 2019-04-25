import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import Event from './Event';
import { MockEventsService } from '../../../../services/events/MockEventsService';
import { ServicesFactory } from '../../../../services/ServicesFactory';
import { MockEventsListService } from '../../../../services/basic/MockEventsListService';
import { MockImagesLibService } from '../../../../services/basic/MockImagesLibService';

describe('Event component', () => {

  it('should pass properties to the Event component', () => {
    const event = (new MockEventsService()).getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;

    // console.log(JSON.stringify(event));
    // console.log(testRenderer.toJSON());

    expect(testInstance.props.event.title).toBe(MockEventsService.evTitle);
    expect(testInstance.props.event.description).toBe(MockEventsService.evDescription);
    expect(testInstance.props.event.imageUrl).toBe(MockEventsService.evImageUrl);
  });

  it('should render the Event title', () => {
    const event = (new MockEventsService()).getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;

    const title = testInstance.findByType('h2').props.children;

    expect(title).toBe(MockEventsService.evTitle);
  });

  it('should reference the Event image', () => {
    const event = (new MockEventsService()).getEventByIndex(0);
    const testRenderer = TestRenderer.create(<Event event={event} />);
    const testInstance = testRenderer.root;

    const src = testInstance.findByType('img').props.src;

    expect(src).toBe(MockEventsService.evImageUrl);
  });

  it('should render an empty event', async () => {
    const servicesFactory = new ServicesFactory();
    const eventItemsWithNullData = new MockEventsListService(MockEventsListService.eventItemsWithNullData);
    const eventsService = servicesFactory.createEventService(eventItemsWithNullData, new MockImagesLibService());
    const eventsCollection = await eventsService.fetchEvents();
    const eventWithNulls = eventsCollection.items[0];
    const testRenderer = TestRenderer.create(<Event event={eventWithNulls} />);
    const testInstance = testRenderer.root;

    const title = testInstance.findByType('h2').props.children;

    expect(title).toBe(MockEventsService.evTitle);
  });
});
