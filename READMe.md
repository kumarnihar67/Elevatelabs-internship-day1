# 🚀 CI/CD Pipeline for Node.js App using GitHub Actions & Docker

## 📝 Task Summary

This project was created to fulfill a task to automate code deployment using a CI/CD pipeline with the following requirements:

- Use **GitHub Actions** to build and deploy a sample **Node.js** web application
- Create a CI/CD workflow in `.github/workflows/main.yml`
- Automate steps: test → build → push Docker image
- Push the Docker image to **DockerHub**
- Trigger the pipeline on push to the `main` branch

---

## ✅ What Was Done

1. Created a basic **Node.js** app (`app.js`, `package.json`)
2. Wrote a **Dockerfile** to containerize the app
3. Set up a **GitHub Actions** workflow to:
   - Run tests (placeholder)
   - Build a Docker image
   - Push the image to DockerHub
4. Added GitHub **secrets** for DockerHub authentication:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`

---
