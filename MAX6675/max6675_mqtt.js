[
    {
        "id": "6fe402cf.7e39dc",
        "type": "mqtt in",
        "z": "afdb9cdd.4814c",
        "name": "",
        "topic": "esp4/sensor",
        "qos": "0",
        "broker": "c6ab789d.5ca2f8",
        "x": 110,
        "y": 140,
        "wires": [
            [
                "7f21aa7c.646214"
            ]
        ]
    },
    {
        "id": "7f21aa7c.646214",
        "type": "json",
        "z": "afdb9cdd.4814c",
        "name": "",
        "pretty": false,
        "x": 270,
        "y": 140,
        "wires": [
            [
                "b935c751.d846e8"
            ]
        ]
    },
    {
        "id": "7a5c771f.0213e8",
        "type": "ui_gauge",
        "z": "afdb9cdd.4814c",
        "name": "",
        "group": "ddf9385a.2644e8",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Gauge",
        "label": "",
        "format": "{{'%.2f'|sprintf:value}}°C",
        "min": "0",
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 590,
        "y": 100,
        "wires": []
    },
    {
        "id": "b935c751.d846e8",
        "type": "change",
        "z": "afdb9cdd.4814c",
        "name": "temperature",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.temperature",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 140,
        "wires": [
            [
                "7a5c771f.0213e8",
                "5d93688f.c1c678",
                "c217f5f7.4ecee8",
                "596a2060.bb1a4",
                "c7742d3d.fa8e8"
            ]
        ]
    },
    {
        "id": "5d93688f.c1c678",
        "type": "debug",
        "z": "afdb9cdd.4814c",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 610,
        "y": 60,
        "wires": []
    },
    {
        "id": "596a2060.bb1a4",
        "type": "mqtt out",
        "z": "afdb9cdd.4814c",
        "name": "",
        "topic": "mushroom/temp",
        "qos": "0",
        "retain": "",
        "broker": "ce8f9293.cd82f",
        "x": 620,
        "y": 180,
        "wires": []
    },
    {
        "id": "c7742d3d.fa8e8",
        "type": "ui_chart",
        "z": "afdb9cdd.4814c",
        "name": "",
        "group": "ddf9385a.2644e8",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "15",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 590,
        "y": 140,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "c6ab789d.5ca2f8",
        "type": "mqtt-broker",
        "z": "",
        "broker": "192.168.0.107",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "ddf9385a.2644e8",
        "type": "ui_group",
        "z": "",
        "name": "ESP-01",
        "tab": "bbc75cb6.1440f",
        "disp": true,
        "width": "6"
    },
    {
        "id": "ce8f9293.cd82f",
        "type": "mqtt-broker",
        "z": "",
        "broker": "m10.cloudmqtt.com",
        "port": "16099",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "bbc75cb6.1440f",
        "type": "ui_tab",
        "z": "",
        "name": "Mushroom",
        "icon": "dashboard"
    }
]
