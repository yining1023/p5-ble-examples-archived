# p5-ble-examples
Examples for p5.ble.js

# Example 1 Reading Arduino/Genuino 101 Accelerometer through Bluetooth in the Browser
1. Go to `arduino101_sketches` folder, and upload arduino sketch `curie_accelerometer.ino` to Arduino/Genuino 101
2. Go to `p5_sketches` folder, Start a simple HTTP server `$ python -m SimpleHTTPServer`
3. Go to `localhost:8000`
4. Press `Connect` button, select `CurieIMU`
4. Press `Start Notifications`
5. X-Axis, Y-Axis, Z-Axis values will be displayed in the console
