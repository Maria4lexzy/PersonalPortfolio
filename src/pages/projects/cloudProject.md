---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Google Cloud Deployment"
role: "frontend developer"
teamNum: "2"
organization: "SDU"
description: " Provide a scalable and high-performance emergency handling software to assist governments and organizations dealing with fire disasters."
video: "https://www.youtube.com/embed/C5xi4fZWvrk"
images: []
featured: false
technologies: ["GCP", "docker"]
externals: []
---

## Description

## Objective

Provide a scalable and high-performance emergency handling software to assist governments and organizations dealing with fire disasters. The software is a mobile application that captures user locations and emotions to guide them to safety, aiding in better decision-making during disasters.

![Figure 1. Architecture Diagram](/images/projects/cloud/architecture_done.jpg)

### Challenges

1. Exponential growth due to global warming and increased disasters.
2. Scalability to handle more users and traffic.
3. Rapid deployment of new features.
4. Handling real-time traffic spikes during disasters.
5. Ensuring security against attacks.

### Non-Functional Requirements

1. Handle at least 2000 simultaneous emotion writes with 3-5 seconds per user.
2. Handle emotion writes with latency under 150ms.
3. Handle traffic spikes without affecting availability.
4. Handle traffic spikes without increasing latency by more than 100ms.
5. Frontend application must establish a connection with the backend within 500ms.

### Functional Requirements

1. Automated build and deployment from source code.
2. Automatic scaling to accommodate changing traffic.
3. Traffic distribution across Google Cloud instances.
4. Selection of the closest data center to reduce latency.
5. Protection against DDoS and XSS attacks.

### Key Technologies

1. Google Cloud CDN: To provide low-latency content delivery.
2. Google Kubernetes Engine (GKE): For deploying and scaling containerized applications.
3. Load Balancer: To distribute user traffic efficiently.
4. Cluster Autoscaler: For dynamic resource scaling.
5. e2-small Machine Series: Balancing cost and performance.
6. Global External HTTP(S) Load Balancer: To serve users worldwide.
7. Cloud Armor: For security against attacks.
8. CORS Policy: For IP restriction.
9. Cloud Build: For CI/CD automation.
10. Terraform: To provision infrastructure.
11. Google Cloud Storage: For Terraform state management.
12. Google Cloud Storage Bucket: To store the Terraform state.
13. Google Cloud Memorystore for Redis: Sub-millisecond data access.
14. Google Container Registry: To store container images.

### Deployment Process

1. Local deployment with Minikube for testing.
2. Test with JMeter for autoscaling and load handling.
3. GKE deployment on Google Cloud for production.

### Evaluation

- Throughput and response time measured with JMeter.
- Autoscaling observed as nodes increase with higher loads.
- Autoscaling reduces nodes as load decreases.

### Discussion

- Learning the value and use cases of various GCP services.
- Autoscaling for cost efficiency and uptime.
- Designed architecture applicable in cloud scenarios for skilled teams and migrating containerized applications.

This project aims to provide an efficient, scalable, and secure emergency handling software to assist governments and organizations during disasters, leveraging the capabilities of Google Cloud.
