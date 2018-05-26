# VPNFace Lite Angular Control Panel

This is sources of angular control panel for VPNFace Lite project (https://github.com/abrakadobr/vpnface_lite/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Nice way for development, is cteating link to compiled path at vpnface_lite folder like

```sh
#removing compiled data
rm -rf $VPNFACE_LITE_DIR/vpnface
#linking dev compiled to vpnface_lite
ln -s $DEV_PATH/dist/vpnface $VPNFACE_LITE_DIR/vpnface
#start angular builds for development
ng build --watch
```
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
