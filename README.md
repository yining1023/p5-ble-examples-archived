# p5-ble-examples
Examples for p5.ble.js

# Example 1 accelerometer(Arduino/Genuino 101)
This example gets Arduino/Genuino 101 accelerometer values through Bluetooth and shows the values in the Browser

1. Go to `arduino101_sketches` folder, and upload arduino sketch `curie_accelerometer.ino` to Arduino/Genuino 101 board

2. Go to `p5_sketches/example1` folder, Start a simple HTTP server `$ python -m SimpleHTTPServer`

3. Go to `localhost:8000`

4. Click `Connect` button, select `CurieIMU`, Click `Pair` button

5. Click `Start Notifications` button, and X-Axis, Y-Axis, Z-Axis values will be displayed in the console
