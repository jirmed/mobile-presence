# Mobile Presence

Web application that presents data from mobile operators in the Brno region (Czech Republic).
It shows the number of people present in  particular region per hour on an average workday and weekend.
The data were caputred in September-October 2016 and are available [here](https://data.brno.cz/en/dataset/?id=data-mobilnich-operatoru-pritomne-obyvatelstvo).


## Installing

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
   * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)
2. Install grunt-cli and bower globally

    ```sh
    npm install grunt-cli bower -g
    ```
3. Clone the repository and navigate into it

    ```sh
    git clone https://github.com/SAP/openui5-basic-template-app.git
    cd openui5-basic-template-app
    ```
4. Install all npm dependencies

    ```sh
    npm install
    ```
5. Install all bower dependencies

    ```sh
    bower install
    ```
6. Run grunt to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).

    ```sh
    grunt
    ```
7. Open the app in your browser: [http://localhost:8080](http://localhost:8080)  


## Built With

* [OpenUI5](https://github.com/SAP/openui5/) - The web framework used
* [Chart.js](https://www.chartjs.org//) - Chart library

## Authors

* [**Jiří Medveď**](https://cz.linkedin.com/in/jirmed) - *Web application* 
* **Sebastián Bröstl** - *Source data transformation* 


## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* This project was created as a school project for a course **[PB138 Modern 
Markup Languages and Their Applications] (https://is.muni.cz/predmet/fi/jaro2018/PB138?lang=en)** 
at [Faculty of Informatics, Masaryk University, Brno, Czech Republic](https://www.fi.muni.cz/index.html.en)
* Base on [Brno Open Data](http://www.otevrenadata.cz)- public data source