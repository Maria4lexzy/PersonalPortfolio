---
layout: ../../layouts/MarkdownProjectLayout.astro
title: 'Angular & React Weather-Server'
role: 'developer'
teamNum: '2'
organization: 'VIA University'
description: 'Weather Report Web Service serving fake (random) weather data for Horsens, Aarhus and Copenhagen. '
images: []
featured: false
technologies:
  ['react', 'angular', 'api', 'postman', 'html', 'javascript', 'css']
externals: [{ name: 'github', url: 'https://github.com/314ga/SWA-Assignment3' }]
---

## Description

Assignment 3 for SWA course
**weather-server:**
The weather-server is a critical component of this assignment, serving as a Weather Report Web Service. It is designed to provide simulated (random) weather data for three specific cities: Horsens, Aarhus, and Copenhagen. This service offers three primary categories of data:

Historic Data: The historical weather data is generated upon server initialization and remains constant unless new data is explicitly posted. It represents past weather conditions for the specified cities.

Forecasts: Periodically, forecasts are regenerated to provide future weather predictions for the same cities. These forecasts are generated based on simulated conditions.

Warnings: The system generates weather warnings at regular intervals. These warnings are independent of other server activities and serve as notifications for potential adverse weather conditions.

`npm start`

**Implementation with React:**
is the react implementation of our weather application for the assignment. you can do the following with it:

1. Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)
2. filter the data you wish to see by date and time
3. Post weather history report to (fake) weather server
   You can run the prject by typing the following in the root of the project:

`npm start`

The Ui of this part is done using **bootstrap 4**

**Angular Implementation**
is the angular implementation of our weather application for the assignment. you can do the following with it:

1. Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)
2. filter the data you wish to see by date and time
3. Post weather history report to (fake) weather server
   You can run the prject by typing the following in the root of the project:

`H1 ng serve --o`

The Ui of this part is done using **angular material components**
