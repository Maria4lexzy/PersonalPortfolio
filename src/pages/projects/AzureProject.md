---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Airline System with Azure"
role: "developer"
teamNum: "2"
organization: "VIA University"
description: "A cloud-based system for United Airlines managers to access flight-related data through a web application. The system utilizes cloud computing services, DevOps practices, and Microsoft Azure. It includes microservices for retrieving data, an Azure SQL Database, and a React.js web application for data visualization"
images: []
featured: true
technologies:
  ["react", "azure", "api", "postman", "html", "javaScript", "CSS", "CI/CD"]
externals:
  [
    { name: "github", url: "https://github.com/314ga/SEP6-WebApp3" },
    { name: "github", url: "https://github.com/314ga/SEP6-UnitedAirlanes/" },
  ]
---

## Introduction

This project explores cloud computing, specifically using Microsoft Azure, to create a system accessible via a web browser for United Airlines managers to view airport-related data. The project's main challenges include selecting the right cloud provider, designing the system's architecture, and implementing DevOps practices for efficient development and deployment.

## ANALYSIS

The project begins by analyzing the problem domain and defining requirements. User stories are used to facilitate implementation and testing. The requirements cover various aspects, including data visualization, weather information, and manufacturer data.

## DESIGN

The system architecture is designed using microservices, which are loosely coupled and independently deployable. It comprises four microservices, an Azure SQL Database, and a React.js web application for data presentation. Azure Functions Proxies are used to create a single API surface for the microservices.

## IMPLEMENTATION

The Azure SQL Database is created and populated with data provided by stakeholders. Four Azure HTTP Trigger Functions are implemented to retrieve flight, weather, and manufacturer data. A Timer Trigger Function periodically updates data from the database to Azure Blob Storage. The Azure Functions Proxies application exposes the microservices' front-end APIs.

## TEST

Testing includes Postman tests for the HTTP trigger functions, interface, usability, and performance testing for the web application, and CI/CD testing to ensure successful updates and deployments.

## RESULTS AND DISCUSSION

The project successfully delivers a system that allows United Airlines managers to access flight-related data from anywhere with internet access. The use of CI/CD enables frequent code updates, and microservices architecture enhances scalability and maintainability.

## CONCLUSIONS

The project demonstrates the benefits of cloud computing, DevOps, and microservices in building a scalable and reliable system. The use of Microsoft Azure, React.js, and CI/CD processes contributes to efficient development and deployment.
