# 使用 Linux 主机设置出口节点实现科学上网

假设你有一台始终可以连接正常网络的 Linux 主机，我们可以将这台主机设置为出口节点，然后其他所有设备都可以访问这台主机，使用这台主机的 IP 地址，实现科学上网。

## 安装 Tailscale

首先，我们需要在这台主机上安装 Tailscale。详情可以参考官方网站：[Tailscale 下载页面](https://tailscale.com/download/linux)。

Tailscale 的底层是基于 WireGuard 的，免费版就可以组成 100 个设备的局域网。同样，我们也可以在手机和其他电脑上安装 Tailscale。登录相同的账号后，我们即可组建自己的局域网。

## 配置 Linux 主机作为出口节点

### 开启 IP 转发

编辑 `sysctl.conf` 文件：
```bash
sudo vim /etc/sysctl.conf
```

添加以下两行，或者将这两行的注释取消掉：
```plaintext
net.ipv4.ip_forward=1
net.ipv6.conf.all.forwarding=1
```

应用更改：
```bash
sudo sysctl -p
```

如果您此时正在使用 SSH 连接这台主机进行操作，为了避免 SSH 断开连接，请使用以下命令：
```bash
sudo tailscale up --advertise-exit-node --ssh
```

如果您直接操作这台主机，并可以完全重启服务，请使用以下命令：
```bash
sudo tailscale up --reset --advertise-exit-node
```

### 检查 Tailscale 状态

检查 Tailscale 的运行状态：
```bash
tailscale status
```

验证 IP 转发是否生效：
```bash
sysctl net.ipv4.ip_forward
sysctl net.ipv6.conf.all.forwarding
```

## 配置 Tailscale 管理后台

登录到 [Tailscale 管理后台](https://admin.tailscale.com)：

1. 找到您想作为出口节点的主机。
2. 点击 **Edit route settings** 部分。

![ ](/linux_exit-node_image/vpn1.png)
3. 允许主机作为出口节点。

4. 保存更改。

## 配置其他设备

接下来打开其他设备的 Tailscale 应用（以手机和 Mac 为例）：

### 手机配置

打开手机上的 Tailscale 应用，可以看到以下选项，选中即可启用该服务。
![ ](/linux_exit-node_image/vpn3.jpeg)

### Mac 配置

在 Mac 上，点击顶部状态栏中的 Tailscale 图标，选择出口节点进行连接。
![ ](/linux_exit-node_image/vpn2.png)
