# TP-Link Cloud Bridge

A simple `express` based server meant to run on the local network to forward commands received over the web to the TP-Link devices on the local network. **This server is not secure - use wisely**

## TP-Link devices

Uses the well documented [tplink-smarthome-api](https://github.com/plasticrake/tplink-smarthome-api) `npm` module to access _TP-Link_ devices on the local network.

## Scripts

```bash
npm run dev
```