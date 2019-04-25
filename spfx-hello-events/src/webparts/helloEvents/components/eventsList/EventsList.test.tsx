import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { IEventsCollection } from '../../../../references';
import { MockEventsListService } from '../../../../services/basic/MockEventsListService';
import { MockImagesLibService } from '../../../../services/basic/MockImagesLibService';
import { ServicesFactory } from '../../../../services/ServicesFactory';
import EventsList from './EventsList';

describe('EventsList', () => {

  let eventsCollection: IEventsCollection;

  beforeAll( async () => {
    const servicesFactory = new ServicesFactory();
    const eventsService = servicesFactory.createEventService(new MockEventsListService(), new MockImagesLibService());
    eventsCollection = await eventsService.fetchEvents();
  });

  it('should receive the children Event components as properties', async () => {
    const testRenderer = TestRenderer.create(<EventsList events={eventsCollection} />);
    const instance = testRenderer.root;

    const quantity = instance.props.events.items.length;

    expect(quantity).toBe(eventsCollection.items.length);
  });

  it('should have children components of Event', async () => {
    const testRenderer = TestRenderer.create(<EventsList events={eventsCollection} />);
    const testInstance = testRenderer.root;

    const eventInstances = testInstance.findAllByProps({className: "event"});

    expect(eventInstances.length).toEqual(eventsCollection.items.length);
  });

  it('should have children components', async () => {
    const testRenderer = TestRenderer.create(<EventsList events={eventsCollection} />);
    const testInstance = testRenderer.root;

    const eventsList = testInstance.find(el => el.children.length === eventsCollection.items.length);

    expect(eventsList).toBeDefined();
  });
});
