#!/bin/bash

# One-click script to stop the local portfolio server

echo "🛑 Stopping Portfolio Local Server..."

# Find and kill any process running on port 3000 or 3001 (Next.js defaults)
PID3000=$(lsof -t -i:3000)
PID3001=$(lsof -t -i:3001)

if [ -n "$PID3000" ]; then
    echo "Killing process on port 3000 (PID: $PID3000)"
    kill -9 $PID3000
fi

if [ -n "$PID3001" ]; then
    echo "Killing process on port 3001 (PID: $PID3001)"
    kill -9 $PID3001
fi

echo "✅ All local servers stopped."
