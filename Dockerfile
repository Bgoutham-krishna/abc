# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy HTML files to the appropriate location
COPY *.html public_html/   # Adjust this line according to the directory structure of your HTML files

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

