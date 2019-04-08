## spfx-hello-events

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

### TODO Ideas

* filter events
* events by search API
* field customizer: select the image with a lookup and render it in a list view 
* display map with event location
* subscribe button
* subscription questions with Survey
* add event to user calender (MSGraphClient)

### Development Notes

# Typescript React code snippets

https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript

# debug in SPO

edit launch.json under .vscode/ folder of the project.

      "url": "https://localhost:4321/temp/workbench.html",

  to

      "url": "https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/workbench.aspx",
",

## Example of a Geolocation field

"{"EntityType":"LocalBusiness","LocationSource":"Bing","LocationUri":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","UniqueId":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","DisplayName":"Aktiengesellschaft Hallenstadion Zürich","Address":{"Street":"Wallisellenstrasse 45","City":"Zürich","CountryOrRegion":"CH","State":"Zürich","PostalCode":"8050"},"Coordinates":{"Latitude":47.4116096496582,"Longitude":8.55165958404541}}"

## During development the following packages were added to the solution using NPM:

# npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save

  public render(): React.ReactElement<IHelloEventsProps> {

    const imageUrl = 'https://adessoleandrobernsmueller.sharepoint.com/sites/CompanyEvents/EventContentImages/team-event.jpeg';

    return (
      <div className={ styles.helloEvents }>
        <section className={ styles.container }>
        <div className={ styles.row }>
            <div className={ styles.column1 }>
              <img src={ imageUrl } alt="Event Image"/>
            </div>
            <div className={ styles.column2 }>
              <h2>The Event of the Year!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <dl>
                  <dt>When:</dt>
                  <dd><time>29.03.2019 15:00</time></dd>
                </dl>
                <dl>
                  <dt>Where:</dt>
                  <dd>Schaffhauserstrasse 100</dd>
                  <dd>8003 Zürich</dd>
                  <dd>Switzerland</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className={ styles.row }>
            <div className={ styles.column1 }>
              <img src={ imageUrl } alt="Event Image"/>
            </div>
            <div className={ styles.column2 }>
              <h2>The Event of the Year!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <dl>
                  <dt>When:</dt>
                  <dd><time>29.03.2019 15:00</time></dd>
                </dl>
                <dl>
                  <dt>Where:</dt>
                  <dd>Schaffhauserstrasse 100</dd>
                  <dd>8003 Zürich</dd>
                  <dd>Switzerland</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
