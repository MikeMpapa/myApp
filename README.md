# myApp


---HOW TO SETUP NVIRONMENT---

1. Create Project dir --> mkdir my_project
2. Initialize environment in my_project dir --> touch index.html
                                            --> npm init --yes
3.Install lightserver to view application on the browser in my_project   --> npm install lite-server --save-dev
4. Modify package.json file to include lite server as following :
           {
          "name": "ng2-start",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "lite": "lite-server"
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "devDependencies":{
            "lite-server": "^2.2.2"
          }
        }

5. Check that everythiong works         --> npm run lite

----    SeTUP TypeScript   ----


6. Install typescript                   --> npm install --save-dev typescript typings
7.Create additional TypeScript files    --> touch tsconfig.json typings.json
8.Setup & Configure Typesript by passing compiler options in in tsconfig.json as:
            {
    "compileOptions":{
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "soourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    }
}

9. Install typings and its libraries    --> npm install -g typings
                                        --> typings install dt~core-js dt~jasmine dt~node --save --global
                                        (check typings.json to see the effect)
10. Update package.json accordingly as:

                 {
          "name": "ng2-start",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "lite": "lite-server",
            "tsc:w": "tsc -w",
            "typings": "typings",
            "postinstall": "typings install"
          },
          "keywords": [],
          "author": "",
          "license": "ISC",
          "devDependencies": {
            "lite-server": "^2.2.2",
            "typescript": "^2.1.6",
            "typings": "^2.1.0"
          }
        }
        (if we clone the repo to a new computer all libraries will be installed automatically by typing: npm install)

----    BUNDLE TypeScript+ LiteServer Together    -----

11. run                              -->    npm install concurrently --save-dev
12. Bundle both packages by updating package.json as:

            {
      "name": "ng2-start",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
        "lite": "lite-server",
        "tsc:w": "tsc -w",
        "typings": "typings",
        "postinstall": "typings install"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "concurrently": "^3.2.0",
        "lite-server": "^2.2.2",
        "typescript": "^2.1.6",
        "typings": "^2.1.0"
      }
    }

13. Check if everython works        --> npm start


------  START WITH TypeScript  -----
14. Create a new dir name app and the relative typescript file       --> mkdir app
           --> touch app/magic.ts
           (if we run npm start, magic.js will be automatically created by typescript and everything we type in typescript format in magic.ts will be automatically converted into javascript in magic.js)

----    INSTALL ANGULAR devDependencies and Packages  ---

--Dependencies
Overview: Core JS Shim, Zone.js, Reflect Metadata, RxJS, SystemJS

15. Install by:     --> npm install core-js reflect-metadata zone.js rxjs@5.0.1 systemjs --save

--Packages
Overview: @angular/core,@angular/common,@amgular/compiler,@amgular/platform-browser,@angular/platform-browser-dynamic

16. npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic --save

--Extras
Overview: @angular/http, @angular/forms, @angular/router, @angular/upgrade

17. npm install @angular/http @angular/forms @angular/router @angular/upgrade --save

----    SETUP SYSTEM.js  ----
18. create systemjs.config.js file in my_project dir     --> touch systemjs.config.js

19. save typing time by copying the following code to systemjs.config.js:

                /**
                 * System configuration for Angular 2 samples
                 * Adjust as necessary for your application needs.
                 */
                (function(global) {
                  // map tells the System loader where to look for things
                  var map = {
                    'app':                        'app', // 'dist',
                    '@angular':                   'node_modules/@angular',
                    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
                    'rxjs':                       'node_modules/rxjs'
                  };
                  // packages tells the System loader how to load when no filename and/or no extension
                  var packages = {
                    'app':                        { main: 'main.js',  defaultExtension: 'js' },
                    'rxjs':                       { defaultExtension: 'js' },
                    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
                  };
                  var ngPackageNames = [
                    'common',
                    'compiler',
                    'core',
                    'forms',
                    'http',
                    'platform-browser',
                    'platform-browser-dynamic',
                    'router',
                    'router-deprecated',
                    'upgrade',
                  ];
                  // Individual files (~300 requests):
                  function packIndex(pkgName) {
                    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
                  }
                  // Bundled (~40 requests):
                  function packUmd(pkgName) {
                    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
                  }
                  // Most environments should use UMD; some (Karma) need the individual index files
                  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
                  // Add package entries for angular packages
                  ngPackageNames.forEach(setPackageConfig);
                  var config = {
                    map: map,
                    packages: packages
                  };
                  System.config(config);
                })(this);

20. Add angular dependecies and packages into the app by importing the into index.html as:    
                              <!DOCTYPE html >
                        <html lang="eng">
                        <head>
                            <meta charset = "UTF-8">
                            <title>My Angular 2 App</title>

                            <!--css-->
                            <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/united/bootstrap.min.css">
                            <style>body {padding: 50px 0; }</style>  
                           
                            <!--js-->

                            <!--load the dependencies-->
                            <script >src="node_modules/core-js/client/shim.min.js"</script>
                            <script >src="node_modules/zone.js/dist/zone.js"</script>
                            <script >src="node_modules/reflect-metadata/Reflect.js"</script>


                            <!--load the angular app with systemjs-->
                               <script >src="node_modules/systemjs/dist/system.src.js"</script>
                               <script >src="systemjs.config.js"</script>
                               <script >
                               System.import('app').catch(function(err){console.error(err);})
                               </script>

                        </head>
                        <body class="container">
                            I am the app!
                        </body>
                        </html>

----------  SUM UP!!!!!!!!! ---------

Having:
a. index.html
b. package.json
c. tsconfig.json
d. typings.json
e. system.config.js

Should be enough to initiate environment for every new application in the future by runing:  npm instal

---------------------------------------------
