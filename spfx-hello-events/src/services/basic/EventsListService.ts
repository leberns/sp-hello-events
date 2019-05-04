import { sp } from '@pnp/sp';

import { IEventsListService } from './IEventsListService';

export class EventsListService implements IEventsListService {

  private readonly eventsListTitle = 'Events Catalog';

  public async fetchEventItems(): Promise<any[]> {
    const eventsList = sp.web.lists.getByTitle(this.eventsListTitle);
    const eventItems = await eventsList.items.orderBy('HEvStart').select('Id', 'Title', 'HEvDescription', 'HEvStart', 'HEvEnd', 'HEvCategoryRef/Id', 'HEvCategoryRef/Title', 'HEvImageRef/Id', 'HEvLocation').expand('HEvCategoryRef', 'HEvImageRef').getAll();
    return eventItems;
  }
}
