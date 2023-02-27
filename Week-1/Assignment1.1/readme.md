## What is a browser ?

A web browser also referred as browser is a software application used to access information on world wide web. The main functionality of a browser is to retrieve web resources from the server and display it on the web browser window. The web resource is usually an HTML document, but may also be a PDF, image, audio, videos or some other type of content. The location of the resource is specified by using a URI (Uniform Resource Identifier).

A browser contains a well structured components which performs a series of task to display web resources on the browser window.

## The browser’s high level structure

![Browser](https://user-images.githubusercontent.com/31536106/213874846-393f1b81-e8df-4e40-9024-497c771763d1.jpeg)

The main components of a web browser are:

- User Interface (UI): It is the layout of elements available for user to interact in the browser window except for the web page itself. The elements for interaction includes address bar, refresh, back, forward, bookmark options and etc.
  ![Browser-features](https://user-images.githubusercontent.com/31536106/213874948-b6ffd3aa-3ff6-4a4d-afe7-55f3d63eb238.jpeg)

- Browser Engine: It is the bridge between the UI and the Rendering Engine. Based on inputs from the UI, it queries HTML document and other resources of a web page into an interactive visual representation on the browser window by manipulating the rendering engine.

- Rendering Engine: It is the component responsible for displaying the requested content on the browser window. For example, if an HTML page is requested, then it is responsible for parsing HTML document and the CSS and display the parsed and formatted content on the screen.

By default, it can display HTML , XML documents and images. It can display other formats of data by using browser plugins and extensions.

There are different rendering engines for different browsers. For example, Internet Explorer uses Gecko, Safari uses WebKit, Chrome and Opera (version 15 onwards) uses Blink, an extended implementation of WebKit.

WebKit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows. See webkit.org for more details.

### The Main Flow

The rendering engine gets the content of the requested document from the Networking component in chunks of 8kb.

Once the chunks are received, following will be the basic flow of rendering engine:
![Main-flow](https://user-images.githubusercontent.com/31536106/213875016-7df35a1f-7c07-4dcf-9fd9-9b2038fc0dea.jpeg)

So here, in this flow, we can see how a HTML document that was fetched over the network is parsed and rendered into a visually appealing view on the screen. The flow contains primarily four stages:

- Parsing HTML to construct the DOM tree: The rendering engine will start parsing the HTML document and convert elements to Document Object Models (DOM) nodes in a tree called the “content tree”.
  ![HTMLdoc](https://user-images.githubusercontent.com/31536106/213875043-f974337b-c526-4eca-bedf-71b2f576eaae.jpeg)

![ContentTree](https://user-images.githubusercontent.com/31536106/213875055-f92b9429-98ba-4600-9a27-287a15e82d96.jpeg)

![HTMLelements](https://user-images.githubusercontent.com/31536106/213875250-8d04e5f2-9260-48d4-ada1-e0f087accf57.jpeg)

- Render tree construction: The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree called the “render tree”.
  The render tree contains rectangles with visual attributes like colour and dimensions. The rectangles are in the right order to be displayed on the screen.

![RenderTree](https://user-images.githubusercontent.com/31536106/213875198-cf401262-53f6-4d63-9d8d-2f6e17eb8992.jpeg)

![BodyElement](https://user-images.githubusercontent.com/31536106/213875149-462d805d-e671-4827-b9b7-53bafa553489.jpeg)

- Layout of the render tree: After the construction of the render tree it goes through a “layout” process. The output of the layout process is a “box model,” which precisely captures the exact position and size of each element within the viewport: all of the relative measurements are converted to absolute pixels on the screen.

In the below screenshot, you can see the “box model” (margin, border, padding, width and height) information computed for body element.
![boxModel](https://user-images.githubusercontent.com/31536106/213875311-a2e64c0b-75eb-4d14-af7b-47611f07f6e6.jpeg)

- Painting the render tree: The render tree will be traversed and each node will be painted using the UI backend layer. This process is also referred to as “rasterising”.
  This is the stage, where the computed layout information for each node in the render tree is converted to actual pixels on the screen.

![PaintedView](https://user-images.githubusercontent.com/31536106/213875337-25b1aa64-913b-407d-a4e9-ce9694107adb.jpeg)

It’s important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

### Main Flow Examples

![GeckoRendringEngine](https://user-images.githubusercontent.com/31536106/213875389-26de4f01-6312-46d9-9d42-27d641b0d4ad.jpeg)

- Networking: It is the component that handles all kind of network communication on the browser. It uses a set of common networking protocols like HTTP, HTTPS, FTP and etc while fetching the requested resources through URLs.

- UI Backend: It is used to draw basic widgets like combobox, alert, pop-up windows, frames etc. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

- JavaScript Interpreter: It is a component used to parse and execute the JavaScript code embedded in a web page.

There are different types of JS engines used by different browsers to analyse, parse and execute, by generating the most optimised JS code in the shortest time. A few are,

- Chrome uses V8 Engine
- Mozilla uses SpiderMonkey
- IE and Edge uses Chakra
- Safari uses JavaScriptCore

- Data Storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
