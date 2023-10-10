# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your Node.js application will listen on
EXPOSE 3000

# Define the command to run your Node.js application
CMD ["node", "src/app.js"]
