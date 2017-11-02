from mqtt.simple import MQTTClient
from time import sleep
from machine import Pin
import esp,network,json,ubinascii
from max6675 import MAX6675

# Modify below section as required
CONFIG = {
     # Configuration details of the MQTT broker
     "MQTT_BROKER": "192.168.0.107",
     "USER": "",
     "PASSWORD": "",
     "PORT": 1883,
     # unique identifier of the chip
     "CLIENT_ID": b"esp8266_04"
}
Topic1=b"esp4/sensor"
Topic2=b"esp4/time"
t=10
esp.sleep_type(esp.SLEEP_LIGHT)
K = MAX6675(3,0,2)

def sub_cb(topic, msg):
  global t
  msg = json.loads(msg)
  t = msg['time']

def connect_wifi():
  sta_if = network.WLAN(network.STA_IF)
  if not sta_if.isconnected():
    sta_if.active(True)
    sta_if.connect('Tenda_1F7DA0', 'aidpoy1505')
    while not sta_if.isconnected():
      pass
    global client
    client = MQTTClient(CONFIG['CLIENT_ID'], CONFIG['MQTT_BROKER'], user=CONFIG['USER'], password=CONFIG['PASSWORD'], port=CONFIG['PORT'])
    client.set_callback(sub_cb)
    client.connect()
    client.subscribe(Topic2)
    
while True:
  try:
    client.check_msg()
    msg = json.dumps({
      'ID':CONFIG['CLIENT_ID'],
      'temperature':K.readTempC()
      })
    client.publish(Topic1,msg)
    sleep(t)
  except:
    connect_wifi()
    continue
