#!/bin/bash

# Enhanced script to stop local development servers

function stop_port() {
    local port=$1
    local pid=$(lsof -t -i:"$port" 2>/dev/null)
    if [ -n "$pid" ]; then
        echo "Stopping process on port $port (PID: $pid)..."
        kill -9 "$pid" 2>/dev/null
        echo "✅ Port $port cleared."
    else
        echo "ℹ️ No active process found on port $port."
    fi
}

function stop_all_next() {
    echo "🛑 Searching for all running Next.js processes..."
    # Find next-server and next-dev processes
    local pids=$(pgrep -f "next-server|next dev" | grep -v grep)
    if [ -n "$pids" ]; then
        echo "Stopping processes: $pids"
        kill -9 $pids 2>/dev/null
        echo "✅ All Next.js processes stopped."
    else
        echo "ℹ️ No Next.js processes found."
    fi
}

# logic based on arguments
if [ "$1" == "all" ]; then
    stop_all_next
elif [ $# -eq 0 ]; then
    echo "🛑 Stopping default portfolio ports (3000, 3001)..."
    stop_port 3000
    stop_port 3001
else
    echo "🛑 Stopping specified ports: $@"
    for port in "$@"; do
        # Check if port is a number
        if [[ $port =~ ^[0-9]+$ ]]; then
            stop_port "$port"
        else
            echo "⚠️ '$port' is not a valid port number."
        fi
    done
fi
