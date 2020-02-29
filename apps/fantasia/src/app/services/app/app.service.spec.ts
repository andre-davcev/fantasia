import { createService } from '@netbasal/spectator/jest';

import { AppList, App, AppProperties, ServiceApp } from '@fantasia/app';

describe('ServiceApp', () => {
  const spectator = createService<ServiceApp>(ServiceApp);

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should generate an app lookup', () => {
    const lookup: Record<App, AppProperties> = spectator.service.generateLookup(AppList);

    const original: AppProperties = AppList[0];
    const app: AppProperties = lookup[original.key];

    expect(Object.keys(lookup).length).toBe(AppList.length);
    expect(app.key).toBe(original.key);
    expect(app.link).toBe(original.link);
    expect(app.order).toBe(0);
    expect(app.iconExtension).toBe(original.iconExtension);
    expect(app.display).toBe(`app.${app.key}.title`);
    expect(app.description).toBe(`app.${app.key}.description`);
    expect(app.icon).toBe(`assets/icons/128/${app.key}.png`);
  });

  it('should convert lookup to ordered array', () => {
    AppList[1].iconExtension = 'jpg';

    const secondKey: string = AppList[1].key;
    const apps: Array<AppProperties> = ServiceApp.toArray(spectator.service.generateLookup(AppList));
    const app: AppProperties = apps[1];

    expect(app.key).toBe(secondKey);
    expect(app.icon).toBe(`assets/icons/128/${app.key}.${app.iconExtension}`);
  })
});
