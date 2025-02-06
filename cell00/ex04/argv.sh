#!/bin/bash

# ตรวจสอบว่า argument ได้รับการส่งมาหรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # ใช้ loop เพื่อแสดง argument ทีละตัว
    for arg in "$@"; do
        echo "$arg"
    done
fi
