# Use Node for building and serving
FROM node:18

# Create workspace
WORKDIR /app

# Copy package files first
COPY server/package*.json ./server/
COPY client/package*.json ./client/

# Install backend dependencies
RUN cd server && npm install

# Install frontend dependencies and build React
RUN cd client && npm install && npm run build

# Copy the rest of the code
COPY . .

# Tell Node to serve the built React app
ENV NODE_ENV=production

# Expose port (HF sets PORT environment var)
ENV PORT=7860
EXPOSE 7860

# Start Node backend (server.js must serve React build)
CMD ["node", "server/server.js"]
