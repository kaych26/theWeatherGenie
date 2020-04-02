# p2_open_weather
Project 2: Getting 5 days weather data

---------------------
HTML
---------------------
https://awesome-lamport-2f101c.netlify.com/

---------------------
 Title:
---------------------
  Weather Genie

---------------------
  Description:
---------------------
1. Displays the 5 days weather data with the high, low temperature and weather icon.
2. User has option to click to get the details.
3. User has option to choose the country and city to get the weather.
4. The header will contain the homepage links
5. The sidebar will be populated with the countries and cities.

---------------------
Wireframes
---------------------
![](./P2_wireframe.png)

---------------------
  API: OpenWeather.org & Weatherstack.com
---------------------
TODAY's weather:
http://api.weatherstack.com/current?access_key=${KEY_weatherstack}&query=${zip}&units=${unit_weatherstack}`

5 Days Forecast Weathers:
https://api.openweathermap.org/data/2.5/forecast?id=${nycId}&units=${unit}&appid=${KEY}`

---------------------
  MVP Features
---------------------
1. README file.

2. Building the APP in REACT which includes axios API call, React DOM manipulation and class react components using link and route.

3. Mapping the city weather using provided city Id json file to call the weather API. Update 4/1: unable to load the city id json file, server kept freezing up when trying to load the file. Changed to only using the NYC id to call OpenWeathermap API to get 5 days forecast.

4. Incoporated the second API (weatherstack.com) to get current days data with more details.

5. Six or more rendered components 
  a. Component Header: renders the heading
  b. Component Sidebar: renders the side menu; future menu option should include city selections.
  c. Component Main:  orgainize the route for homepage and other pages
  d. Component WeatherCurrent: calls API and render today's weather detail
  e. Component WeatherForecast: calls API and render today's plus next 5 days weather.
  f. Component Footer: renders the app copyright footer using the storybook lib.

6. Storybook - 5 or more components
  a. Button: used to created the 2 buttons on the sidebar
  b. FooterLogo: customized copyright footer for this project and future use.
  c. Today: dynamically creates the label with today's date
  d. Time: dynamically creates the label with time
  e. Title: dynamiclally creates label name

7. Styling: primarily used grid to orgainize data layout. 

8. Incorporated responsive design for desktop, ipad and iphone X

9. Final project will be deployed to Surge or Netlify.

---------------------
  POST MVP:
---------------------
POST MVP: If time allows, I like to do the following:

1. CSS styling to make the webpage with more professional appearance.
2. Add counter to track the number of website visiters.

---------------------
SWOT Analysis
---------------------
After connecting the API and retrieving the data, I am comfortable that this is a stable API and able to use the data. I amy encounter issues doing the following:

 - Creating the storybook component and using it in the react app. If running into issue, will try to use google and online videos.

 - I will take this opportunity to get more familiar with grid styling for the detail page with the sidebar layout.

 - If time allows, I will try to build the hamburger menu tab which I will try to figure it out.

