# Use Node 18
FROM node:18

# Set working directory
WORKDIR /app

# -------------------------------
# 1. Copy entire client and server folders first
# -------------------------------
COPY server ./server
COPY client ./client

# -------------------------------
# 2. Install dependencies
# -------------------------------
RUN cd server && npm install
RUN cd client && npm install

# -------------------------------
# 3. Build React frontend
# -------------------------------
RUN cd client && npm run build

# -------------------------------
# 4. Set environment variables
# -------------------------------
ENV NODE_ENV=production
ENV PORT=7860
EXPOSE 7860

# -------------------------------
# 5. Start Node backend (should serve React build)
# -------------------------------
CMD ["node", "server/server.js"]
