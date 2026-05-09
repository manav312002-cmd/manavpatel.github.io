# ESP RainMaker Template

This template provides a clean, modular structure for ESP RainMaker projects with complete separation between generic framework code and device-specific logic.

## Structure

- **app_main.c**: Completely generic RainMaker application framework
  - Handles NVS, network, node initialization
  - Sets up all RainMaker services (OTA, scheduling, scenes, etc.)
  - Can be used identically across all device types
  
- **app_devices.c**: Device-specific RainMaker implementation template
  - Node creation with device type
  - Device creation with appropriate parameters
  - Parameter callback handling
  - Manufacturing data setup
  - Hardware driver initialization

## Usage

1. Copy this template as a base for new device projects
2. Implement the TODO items in `app_devices.c`:
   - Replace `"DEVICE_TYPE"` with your device type
   - Add appropriate device creation logic
   - Set correct manufacturing data constants
   - Add hardware initialization

3. Create separate `app_driver.c` and `app_priv.h` files for hardware-specific code

## Key Benefits

- **app_main.c remains identical** across switch, light, fan, sensor projects
- Clear separation of framework vs device vs hardware logic
- Easy to maintain and extend
- Consistent structure across all ESP RainMaker examples

## Required Functions

The template requires implementing these functions in `app_devices.c`:
- `app_driver_init()` - Initialize hardware
- `app_device_create_node()` - Create RainMaker node with device type
- `app_device_create()` - Create device with parameters and callbacks
- `app_device_set_mfg_data()` - Set manufacturing data

## Building

```
idf.py build
idf.py flash monitor
```

**Note**: This template will not build as-is. You must implement the TODO items in `app_devices.c` first.
