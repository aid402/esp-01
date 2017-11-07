[
    {
        "id": "e2b46fd7.5bc01",
        "type": "mqtt in",
        "z": "4336a48d.74d74c",
        "name": "",
        "topic": "esp4/sensor",
        "qos": "0",
        "broker": "c6ab789d.5ca2f8",
        "x": 130,
        "y": 240,
        "wires": [
            [
                "484f3369.21738c"
            ]
        ]
    },
    {
        "id": "484f3369.21738c",
        "type": "json",
        "z": "4336a48d.74d74c",
        "name": "",
        "pretty": false,
        "x": 290,
        "y": 240,
        "wires": [
            [
                "c197c05d.fcfd2"
            ]
        ]
    },
    {
        "id": "3535fc99.ef1884",
        "type": "ui_gauge",
        "z": "4336a48d.74d74c",
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
        "x": 610,
        "y": 240,
        "wires": []
    },
    {
        "id": "c197c05d.fcfd2",
        "type": "change",
        "z": "4336a48d.74d74c",
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
        "x": 450,
        "y": 240,
        "wires": [
            [
                "3535fc99.ef1884",
                "411c0794.691ac8",
                "599e30d3.ea0ff"
            ]
        ]
    },
    {
        "id": "411c0794.691ac8",
        "type": "debug",
        "z": "4336a48d.74d74c",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 630,
        "y": 200,
        "wires": []
    },
    {
        "id": "599e30d3.ea0ff",
        "type": "ui_chart",
        "z": "4336a48d.74d74c",
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
        "x": 610,
        "y": 280,
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
        "id": "bbc75cb6.1440f",
        "type": "ui_tab",
        "z": "",
        "name": "Mushroom",
        "icon": "dashboard"
    }
]
