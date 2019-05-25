import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import { IEventsCollection } from '../../../../references';
import { MockEventsListService } from '../../../../services/basic/MockEventsListService';
import { MockImagesLibService } from '../../../../services/basic/MockImagesLibService';
import { ServicesFactory } from '../../../../services/ServicesFactory';

describe('EventsList', () => {

  let eventsCollection: IEventsCollection;

  beforeAll( async () => {
    const servicesFactory = new ServicesFactory();
    const eventsService = servicesFactory.createEventService(new MockEventsListService(), new MockImagesLibService());
    eventsCollection = await eventsService.fetchEvents();
  });

});
