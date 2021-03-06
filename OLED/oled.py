from umqtt.simple import MQTTClient
from time import sleep
from machine import Pin,I2C,reset
import network,esp,gc,json,ssd1306

# Modify below section as required
ssid = "xxxxx"
password = "yyyyy"
CONFIG = {
     # Configuration details of the MQTT broker
     "MQTT_BROKER": "192.168.0.107",
     "USER": "",
     "PASSWORD": "",
     "PORT": 1883,
     "CLIENT_ID": b"oled"
}
Topic1=b"oled/pub"
Topic2=b"oled/sub"
client = ''

i2c = I2C(scl=Pin(0), sda=Pin(2))
oled = ssd1306.SSD1306_I2C(128,64,i2c)
oled.fill(0)
oled.text('Hello',41,28)
oled.show()

def sub_cb(topic, msg):
  msg = json.loads(msg)
  for c in msg['cmd']:
    if c[0] == 'fill': oled.fill(c[1])
    elif c[0] == 'pixel': oled.pixel(c[1],c[2],c[3])
    elif c[0] == 'text': oled.text(c[1],c[2],c[3],c[4])
    elif c[0] == 'rect': oled.rect(c[1],c[2],c[3],c[4],c[5])
    elif c[0] == 'fill_rect': oled.fill_rect(c[1],c[2],c[3],c[4],c[5])
    elif c[0] == 'line': oled.line(c[1],c[2],c[3],c[4],c[5])
    elif c[0] == 'vline': oled.vline(c[1],c[2],c[3],c[4])
    elif c[0] == 'hline': oled.hline(c[1],c[2],c[3],c[4])
    elif c[0] == 'scroll': oled.scroll(c[1],c[2])
    elif c[0] == 'blit': oled.blit(c[1],c[2],c[3],c[4])
    elif c[0] == 'show': oled.show()
    elif c[0] == 'poweron': oled.poweron()
    elif c[0] == 'poweroff': oled.poweroff()
    elif c[0] == 'collect': gc.collect()
    elif c[0] == 'reset': machine.reset()
    elif c[0] == 'sleep':
      if c[1] == 'none': esp.sleep_type(esp.SLEEP_NONE)
      elif c[1] == 'light': esp.sleep_type(esp.SLEEP_LIGHT)
      sleep(c[2])
  msg = json.dumps({
    'ID':CONFIG['CLIENT_ID'],
    'mem_free':gc.mem_free()
    })
  client.publish(Topic1,msg)
  
def connect_wifi():
  sta_if = network.WLAN(network.STA_IF)
  if not sta_if.isconnected():
    sta_if.active(True)
    sta_if.connect(ssid, password)
    while not sta_if.isconnected():
      pass
  else:
    global client
    client = MQTTClient(CONFIG['CLIENT_ID'], CONFIG['MQTT_BROKER'], user=CONFIG['USER'], password=CONFIG['PASSWORD'], port=CONFIG['PORT'])
    client.set_callback(sub_cb)
    client.connect()
    client.subscribe(Topic2)
    sleep(1)
    
while True:
  try:
    client.check_msg()
    sleep(1)
  except:
    connect_wifi()
    continue
