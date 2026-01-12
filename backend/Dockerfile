# Stage 1: Build stage
FROM python:3.12-slim AS builder

WORKDIR /app

COPY requirements.txt .

# Install dependencies to a local directory
RUN pip install --no-cache-dir -r requirements.txt -t /app/site-packages

# Stage 2: Final distroless image
FROM gcr.io/distroless/python3-debian12

WORKDIR /app

# Copy the dependencies from the build stage
COPY --from=builder /app/site-packages /app/site-packages
# Copy the application code
COPY app.py .

# Add the site-packages to the python path
ENV PYTHONPATH=/app/site-packages
ENV PYTHONUNBUFFERED=1

EXPOSE 5000

CMD ["app.py"]
