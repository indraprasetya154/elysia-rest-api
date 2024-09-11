# Use the official Bun image
FROM oven/bun:1.1.4

# Set the working directory
WORKDIR /app

# Copy your application code
COPY . .

# Install dependencies
RUN bun install --production
RUN bun run build

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Command to run the application
CMD ["bun", "dist/index.js"]