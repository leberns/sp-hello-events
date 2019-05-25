import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import EventsListContainer from './EventsListContainer';
import { ServicesFactory } from '../../../../services/ServicesFactory';
import { MockEventsListService } from '../../../../services/basic/MockEventsListService';
import { MockImagesLibService } from '../../../../services/basic/MockImagesLibService';

describe('EventsListContainer', () => {

  it('should create the EventsList children component', async () => {
    const servicesFactory = new ServicesFactory();
    const eventsService = servicesFactory.createEventService(new MockEventsListService(), new MockImagesLibService());
    const testRenderer = TestRenderer.create(<EventsListContainer eventsService={eventsService} />);
    const testInstance = testRenderer.root;
    const instance = testRenderer.getInstance();

    await instance.componentDidMount();
    const quantity = testInstance.findAllByProps({className: 'eventsList'}).length;

    expect(quantity).toBe(1);
  });
});
