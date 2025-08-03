#!/bin/bash

# Development startup script
echo "🚀 Starting Personal Website Development Environment"

# Function to cleanup background processes
cleanup() {
    echo "🛑 Shutting down development servers..."
    jobs -p | xargs -r kill
    exit 0
}

# Set up signal handlers for cleanup
trap cleanup SIGINT SIGTERM

# Start backend server
echo "📡 Starting backend server on port 3000..."
cd backend && npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend development server
echo "🎨 Starting frontend development server on port 5173..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo "✅ Development environment ready!"
echo "📱 Frontend: http://localhost:5173"
echo "🔌 Backend API: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for background processes
wait
