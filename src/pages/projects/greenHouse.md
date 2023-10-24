---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Greenhouse Management System"
role: "developer"
teamNum: "2"
organization: "None"
description: " BeagleGreen is a system designed to assist greenhouse owners in managing their plants effectively by monitoring temperature, humidity, and light levels."
video: "https://www.youtube.com/embed/8yLJz-BwpTg"
images: []
featured: true
technologies: ["react", "node.js", "socket.io", "IoT"]
externals: []
---

## Description

# BeagleGreen - Greenhouse Management System

## Introduction

BeagleGreen is developed to aid people who own greenhouses and are finding it hard to tend to their plants, monitor heat, light, and humidity levels. The main purpose is to simplify the lives of greenhouse owners through an intelligent greenhouse.

## Analysis

Once the problem domain was understood, the requirements were set. The system allows users to:

- See live temperature data
- See live humidity data
- See live light intensity data
- Control the opening and closing of windows
- Control the heating
- Control the light intensity of the artificial light

## Design

The system consists of two main layers: Embedded and Presentation. Hardware components include:

- Temperature and humidity sensors (HIH8120)
- Artificial light module
- Light sensor (photoresistor)
- Heating device (relay)
- Servo motor for window control

### Pin Usage Table

| Pin number | Power Voltage  | Device connected   | Mode   | Purpose                   |
| ---------- | -------------- | ------------------ | ------ | ------------------------- |
| 15         | 5V             | Relay              | GPIO   | Heating control           |
| 16         | 5V             | Servo motor        | PWM    | Window control            |
| 19,20      | 3.3V           | Humidity sensor    | I2C    | Measuring humidity        |
| 19,20      | 3.3V           | Temperature sensor | I2C    | Measuring temperature     |
| 33         | 1.8V (VDD_ADC) | Photoresistor      | ANALOG | Measuring light intensity |
| 21         | 3.3V           | Artificial light   | PWM    | Setting artificial light  |

### Schematic

The schematic shows the hardware connections.

![Figure 1. Schematic](/images/projects/eosSchematic.png)

## Implementation

### Embedded Layer

In the implementation, input and output types of components were determined and connected to the BeagleBone Black (BBB) device. For instance, temperature and humidity sensors required I2C communication, while the light sensor used an analog pin. Servo motors and artificial lights connected to PWM pins. The heating system used a relay for control.

### Presentation Layer

Communication between the Presentation and Embedded layers was established using Node.js. A web server on port 8888 allowed client-server communication, and Socket.io enabled real-time interaction. Users could control heating, light, and windows via a web interface.

## Testing

The system was rigorously tested to ensure it met requirements, including accessing the web interface, loading real-time sensor data, controlling heating, adjusting light intensity, and managing window openings.

**Test Results:**

- Accessing client side by going to 192.168.7.2:8888: ✓
- Loading data from sensors: ✓
- Turning on/off heating by user input: ✓
- Changing the light intensity: ✓
- Opening and closing the window: ✓

## Results and Conclusions

BeagleGreen successfully integrates hardware and software components to create an intelligent greenhouse management system. Users can monitor, control, and optimize conditions within the greenhouse, and the system fulfills its requirements. This solution empowers greenhouse owners to efficiently tend to their plants and provides real-time insights into environmental conditions for improved cultivation.
