import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import HelloEvents from './HelloEvents';
import { ServicesFactory } from '../../../../services/ServicesFactory';
import { MockEventsListService } from '../../../../services/basic/MockEventsListService';
import { MockImagesLibService } from '../../../../services/basic/MockImagesLibService';
import { MockEventsService } from '../../../../services/events/MockEventsService';

describe('HelloEvents', () => {

  it('should create the HelloEvents children component', async () => {
    const servicesFactory = new ServicesFactory();
    const eventsService = servicesFactory.createEventService(new MockEventsListService(), new MockImagesLibService());
    // shallow
    const testRenderer = TestRenderer.create(<HelloEvents eventsService={eventsService} />);
    const testInstance = testRenderer.root;

    const quantity = testInstance.findAllByProps({ className: 'helloEvents' }).length;

    expect(quantity).toBe(1);
  });

  it('should display the error component', async () => {
    const eventsService = new MockEventsService(MockEventsService.getEventsWithNullData());
    // shallow
    const testRenderer = TestRenderer.create(<HelloEvents eventsService={eventsService} />);
    const testInstance = testRenderer.root;

    console.log(testInstance);
    console.log(testRenderer.toJSON());

    const quantity = testInstance.findAllByProps({ className: 'errorBoundary' }).length;

    expect(quantity).toBe(1);
  });
});
