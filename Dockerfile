# ---------- 1️⃣ Build Stage ----------
  FROM node:18-alpine AS builder
  WORKDIR /app

  # Install dependencies
  COPY package*.json ./
  RUN npm ci --legacy-peer-deps
  
  # Copy source code
  COPY . .
  
  # Build Next.js app
  RUN npm run build
  
  # ---------- 2️⃣ Runtime Stage ----------
  FROM node:18-alpine AS runner
  WORKDIR /app
  
  ENV NODE_ENV=production
  ENV PORT=3002
  ENV HOSTNAME="0.0.0.0"
  

  # Create a non-root user for security
  
  RUN addgroup --system --gid 1001 nodejs && \
      adduser --system --uid 1001 nextjs
  
  # Copy only what's needed for running
  COPY --from=builder /app/package*.json ./
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/public ./public



  RUN chown -R nextjs:nodejs ./


  USER nextjs

  EXPOSE 3002

 
  # Expose port & start
  EXPOSE 3002
  CMD ["npm", "run", "start"]
  