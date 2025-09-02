# BrighterNova.com Deployment Guide

## Server Information
- Host: 137.184.189.47
- Domain: brighternova.com
- User: root
- OS: Ubuntu

## Prerequisites Setup

### 1. Connect to your server
```bash
ssh root@137.184.189.47
```

### 2. Update system packages
```bash
apt update && apt upgrade -y
```

### 3. Install Node.js and npm
```bash
# Install Node.js 18.x LTS
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 4. Install Nginx
```bash
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

### 5. Install Git
```bash
apt install git -y
```

### 6. Install PM2 (Process Manager)
```bash
npm install -g pm2
```

## Project Deployment

### 1. Clone the project
```bash
cd /var/www/
git clone https://github.com/devlaamgo-star/brighternova.com.git
cd brighternova.com
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the project
```bash
npm run build
```

### 4. Configure Nginx

Create Nginx configuration:
```bash
nano /etc/nginx/sites-available/brighternova.com
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name brighternova.com www.brighternova.com;
    root /var/www/brighternova.com/dist;
    index index.html;

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### 5. Enable the site
```bash
ln -s /etc/nginx/sites-available/brighternova.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 6. Set up SSL with Let's Encrypt (Optional but recommended)
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d brighternova.com -d www.brighternova.com
```

### 7. Set up automatic deployment script

Create deployment script:
```bash
nano /var/www/deploy-brighternova.sh
```

Add this content:
```bash
#!/bin/bash
cd /var/www/brighternova.com
git pull origin main
npm install
npm run build
systemctl reload nginx
echo "Deployment completed successfully!"
```

Make it executable:
```bash
chmod +x /var/www/deploy-brighternova.sh
```

### 8. Set up proper permissions
```bash
chown -R www-data:www-data /var/www/brighternova.com
chmod -R 755 /var/www/brighternova.com
```

## Firewall Configuration

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

## DNS Configuration

Ensure your domain DNS is pointing to your server:
- A record: brighternova.com → 137.184.189.47
- A record: www.brighternova.com → 137.184.189.47

## Verification

1. Check if Nginx is running: `systemctl status nginx`
2. Check if the site builds correctly: `cd /var/www/brighternova.com && npm run build`
3. Visit https://brighternova.com in your browser

## Future Updates

To update the site:
```bash
/var/www/deploy-brighternova.sh
```

## Monitoring and Logs

- Nginx logs: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`
- Check disk space: `df -h`
- Check system resources: `htop`

## Backup Strategy

Set up automated backups:
```bash
# Create backup script
nano /root/backup-site.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Backup website files
tar -czf "$BACKUP_DIR/brighternova_$DATE.tar.gz" -C /var/www brighternova.com

# Keep only last 7 backups
find $BACKUP_DIR -name "brighternova_*.tar.gz" -type f -mtime +7 -delete
```

Add to crontab for daily backups:
```bash
crontab -e
# Add this line for daily backup at 2 AM
0 2 * * * /root/backup-site.sh
```

## Security Recommendations

1. **Change default SSH port** (optional):
   ```bash
   nano /etc/ssh/sshd_config
   # Change Port 22 to Port 2222
   systemctl restart ssh
   ```

2. **Set up fail2ban**:
   ```bash
   apt install fail2ban -y
   systemctl enable fail2ban
   ```

3. **Regular updates**:
   ```bash
   # Set up automatic security updates
   apt install unattended-upgrades -y
   dpkg-reconfigure -plow unattended-upgrades
   ```

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **Permission errors**: Ensure proper ownership with `chown -R www-data:www-data`
3. **Nginx 502 errors**: Check if the build directory exists and has correct permissions
4. **Domain not accessible**: Verify DNS propagation and firewall settings

### Useful Commands:
```bash
# Check Nginx configuration
nginx -t

# Reload Nginx
systemctl reload nginx

# View real-time logs
tail -f /var/log/nginx/access.log

# Check system resources
htop

# Check disk usage
df -h
