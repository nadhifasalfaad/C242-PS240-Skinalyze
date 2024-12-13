# Base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY src ./src
COPY data ./data

# Expose port
EXPOSE 8080

# Command to run the app
CMD ["node", "src/app.js"]
