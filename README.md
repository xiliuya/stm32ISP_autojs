# stm32ISP_autojs
利用串口助手，使用OTG串口烧写stm32

使用步骤：

1、下载并安装[串口调试助手](https://github.com/xiliuya/stm32ISP_autojs/releases/download/1.0/OTG_usb_Serial_port_1.3.apk)

2、下载并安装[烧写stm32](https://github.com/xiliuya/stm32ISP_autojs/releases/download/1.0/stm32_v1.0.0.apk)

3、将准备好的bin文件，重命名为1.bin，放入/sdcard/目录下(内部存储根目录)。

4、启动 烧写stm32 并授予：悬浮窗、无障碍权限。

5、授权后重启 烧写stm32，此时右上角有悬浮窗。

6、打开 串口调试助手 并连接OTG USB串口(stm32与串口连接方式与pc烧写一致，[参考链接](http://m.eeworld.com.cn/ic_article/268/41865.html)。)

7、如下图，选择HEX。

![截图](https://github.com/xiliuya/stm32ISP_autojs/blob/master/image/Screen_usbserialport.png)

8、点击右上角 开始运行 悬浮窗，根据提示选择相应功能。

![截图2](https://github.com/xiliuya/stm32ISP_autojs/blob/master/image/Screenshot_2020-08-24-13-52-28-567_xnj.lazydog.usbserialport.jpg)。
